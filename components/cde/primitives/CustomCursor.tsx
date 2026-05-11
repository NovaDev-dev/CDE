"use client";
import { useState, useEffect } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isLink, setIsLink] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) =>
      setIsLink(!!(e.target as HTMLElement).closest("[data-link]"));

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className={`cursor-blob${isLink ? " over-link" : ""}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
}
