"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!mainRef.current) return;
      const { clientX, clientY } = ev;
      mainRef.current.style.setProperty("--x", `${clientX}px`);
      mainRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main
      className="h-[75vh] flex items-center justify-center before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_rgb(var(--color-primary))_0%,_transparent_16%)] before:opacity-40"
      ref={mainRef}
    >
      <h1>NEXT JS BOILERPLATE</h1>
    </main>
  );
}
