import { useEffect, useState, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const trailRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      trailRef.current.x += (pos.x - trailRef.current.x) * 0.12;
      trailRef.current.y += (pos.y - trailRef.current.y) * 0.12;
      setTrail({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const addHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };
    addHover();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [pos.x, pos.y]);

  // Hide on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      <div
        className={`${styles.dot} ${hovering ? styles.dotHover : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`${styles.ring} ${hovering ? styles.ringHover : ""}`}
        style={{ left: trail.x, top: trail.y }}
      />
    </>
  );
}
