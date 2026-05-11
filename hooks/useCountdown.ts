"use client";
import { useState, useEffect } from "react";

type Countdown = { days: string; hours: string; minutes: string; seconds: string };

export function useCountdown(target: Date): Countdown {
  const [time, setTime] = useState<Countdown>({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    function tick() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTime({
        days:    String(d).padStart(2, "0"),
        hours:   String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}
