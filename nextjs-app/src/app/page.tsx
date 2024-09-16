"use client";
import DownloadSection from "@/components/layout/DownloadSection";
import { useEffect, useRef } from "react";

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
 

  return (
    <main
      className="h-[75vh] flex items-center justify-center  before:fixed before:inset-0 before:z-0"
      ref={mainRef}
    >
     <DownloadSection />
    </main>
  );
}
