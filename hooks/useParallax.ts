"use client";
import { useState, useEffect } from "react";

export function useParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handle(e: MouseEvent) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    }
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return offset;
}
