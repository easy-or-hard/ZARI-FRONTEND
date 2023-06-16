"use client";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import styles from "./styles.module.css";

export default function ShootingStar() {
  const [shootingStarStyle, setShootingStarStyle] = useState({});

  const shootingProps = useSpring({
    to: { opacity: 1, marginTop: window.innerHeight },
    from: { opacity: 0, marginTop: -100 },
    config: { duration: 2000 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const randomX = Math.random() * window.innerWidth;
      setShootingStarStyle({ left: randomX });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <animated.div
      style={{ ...shootingProps, ...shootingStarStyle }}
      className={`${styles.star} ${styles.shootingStar}`}
    />
  );
}
