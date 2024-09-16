"use client";
import { useEffect, useRef } from "react";
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  
    const googleDriveLink = "https://drive.google.com/uc?export=download&id=1pzmfSE2MswvHK34GeseVHMjyA7GOeWfZ"; // Replace with your Google Drive file link

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
       <div className="flex items-center justify-center">
            <div className="text-center bg-white/10 p-4 rounded-2xl shadow-lg backdrop-blur-md">
                <h2 className="text-4xl font-bold text-white mb-6">Download Side Pannel Extension</h2>
                <a
                    href={googleDriveLink}
                    className="btn btn-outline btn-accent btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Download Now */}
                    <ArrowDownTrayIcon className="h-6 w-6 mx-auto" />
                    
                </a>
            </div>
        </div>
    </main>
  );
}
