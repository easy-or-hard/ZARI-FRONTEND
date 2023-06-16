"use client";

import ShootingStar from "@/app/component/animation/shooting-star/shooting-star";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function ShootingStarPage() {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const newStars = Array.from({ length: 200 }).map((_, index) => {
      const size = Math.random() * 3;
      const randomX = Math.random() * (window.innerWidth + 100);
      const randomY = Math.random() * (window.innerHeight + 100);
      return (
        <div
          key={index}
          className={styles.star}
          style={{ top: randomY, left: randomX, width: size, height: size }}
        />
      );
    });
    setStars(newStars);
  };

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.background}>
      {stars}
      <ShootingStar />
    </div>
  );
}
