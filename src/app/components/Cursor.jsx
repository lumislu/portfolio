"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import styles from "./Cursor.module.css";

const Cursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (document.body.clientWidth > 300) {
      const moveCircle = (e) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: Linear.easeNone,
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: Linear.easeNone,
        });
      };

      const hover = () => {
        gsap.to(cursor.current, {
          scale: 0.5,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 3,
          duration: 0.3,
        });
      };

      const unHover = () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1,
          duration: 0.3,
        });
      };

      document.addEventListener("mousemove", moveCircle);

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });
    }
  }, [cursor, follower]);

  return (
    <>
      <div ref={cursor} className={`${styles.cursor}   position-fixed   `} />
      <div
        ref={follower}
        className={`${styles.cursorFollower} position-fixed `}
      />
    </>
  );
};

export default Cursor;
