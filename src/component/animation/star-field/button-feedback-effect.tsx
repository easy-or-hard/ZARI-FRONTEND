"use client";

import styles from "./star-field.module.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs";

const numberOfParticles = 10;
const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];

export default function ButtonFeedbackEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const pointerRef = useRef<{ pointerX: number; pointerY: number }>({
    pointerX: 0,
    pointerY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    setCanvas(canvas);
    setContext(context);
  }, []);

  const setParticleDirection = useCallback((x: number, y: number) => {
    const angle = (anime.random(0, 360) * Math.PI) / 180;
    const value = anime.random(50, 180);
    const radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: x + radius * Math.cos(angle),
      y: y + radius * Math.sin(angle),
    };
  }, []);

  const createParticle = useCallback(
    (x: number, y: number, points = 5, innerRadius = 15, outerRadius = 30) => {
      if (!context) return;
      return {
        x: x,
        y: y,
        color: colors[anime.random(0, colors.length - 1)],
        radius: anime.random(16, 32), // 원을 그릴때 썻던거...
        endPos: setParticleDirection(x, y),

        outerRadius: outerRadius,
        innerRadius: innerRadius,
        draw: function () {
          context.beginPath();
          // context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
          const angle = Math.PI / points;

          for (let i = 0; i < 2 * points; i++) {
            const radius = i % 2 === 0 ? this.outerRadius : this.innerRadius;
            const currX = this.x + radius * Math.sin(i * angle);
            const currY = this.y + radius * Math.cos(i * angle);
            context.lineTo(currX, currY);
          }

          context.closePath();
          context.fillStyle = this.color;
          context.fill();
        },
      };
    },
    [context, setParticleDirection]
  );

  const createCircle = useCallback(
    (x: number, y: number) => {
      if (!context) return;
      return {
        x: x,
        y: y,
        color: "#FFF",
        radius: 0.1,
        alpha: 0.5,
        lineWidth: 6,
        draw: function () {
          context.globalAlpha = this.alpha;
          context.beginPath();
          context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
          context.lineWidth = this.lineWidth;
          context.strokeStyle = "#FFF";
          context.stroke();
          context.globalAlpha = 1;
        },
      };
    },
    [context]
  );

  function renderParticle(anim: any) {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  }

  const animateParticles = useCallback(
    (x: number, y: number) => {
      if (!canvas || !context) return;

      const circle = createCircle(x, y);
      const particles = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle(x, y));
      }
      anime
        .timeline({
          easing: "easeOutExpo",
          duration: anime.random(1200, 1800),
        })
        .add({
          targets: particles,
          x: function (p: any) {
            return p.endPos.x;
          },
          y: function (p: any) {
            return p.endPos.y;
          },
          radius: 0.1,
          innerRadius: 0.1,
          outerRadius: 0.1,
          update: renderParticle,
        })
        .add(
          {
            targets: circle,
            radius: anime.random(80, 160),
            lineWidth: 0,
            alpha: {
              value: 0,
              easing: "linear",
              duration: anime.random(600, 800),
            },
            update: renderParticle,
          },
          0
        );
    },
    [canvas, context, createCircle, createParticle]
  );

  const render = useMemo(() => {
    if (!canvas || !context) return;

    return anime({
      duration: Infinity,
      update: function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
      },
    });
  }, [canvas, context]);

  const updateCoords = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      pointerRef.current.pointerX = e.clientX;
      pointerRef.current.pointerY = e.clientY;
    },
    []
  );

  const listenEventClick = useCallback(
    (e: MouseEvent) => {
      if (!render) return;

      const target = e.target as HTMLElement;
      const parentTarget =
        target.parentNode && (target.parentNode as HTMLElement);
      if (
        target.tagName.toLowerCase() !== "button" &&
        parentTarget?.tagName.toLowerCase() !== "button"
      ) {
        return;
      }

      render.play();
      updateCoords(e);
      animateParticles(
        pointerRef.current.pointerX,
        pointerRef.current.pointerY
      );
    },
    [animateParticles, updateCoords]
  );

  const listenEventResizeCanvas = useCallback(() => {
    if (!canvas || !context) return;

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    context.scale(2, 2);
  }, [canvas, context]);

  useEffect(() => {
    listenEventResizeCanvas();
    window.addEventListener("resize", listenEventResizeCanvas);
    window.addEventListener("click", listenEventClick);
    return () => {
      window.removeEventListener("resize", listenEventResizeCanvas);
      window.removeEventListener("click", listenEventClick);
    };
  }, [listenEventClick, listenEventResizeCanvas]);

  return (
    <div onClick={updateCoords}>
      <canvas className={styles.starField} ref={canvasRef}>
        test
      </canvas>
    </div>
  );
}
