"use client";
import DownloadSection from "@/components/layout/DownloadSection";
import FeatureSection from "@/components/layout/FeatureSection";
import { useRef } from "react";
import { FaUsers, FaShieldAlt, FaVoteYea, FaCogs } from 'react-icons/fa';

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
  }


  const features: Feature[] = [
    {
      title: 'Decentralized Governance',
      description: 'Vote on proposals and make decisions together as a community.',
      icon: <FaVoteYea />
    },
    {
      title: 'Security and Transparency',
      description: 'Our DAO is built on secure blockchain technology ensuring transparency and security.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Community Driven',
      description: 'The community has the power to propose, discuss, and vote on the direction of the project.',
      icon: <FaUsers />
    },
    {
      title: 'Automated Processes',
      description: 'Smart contracts ensure that everything runs smoothly and autonomously.',
      icon: <FaCogs />
    }
  ];

  return (
    <main
      className="h-[75vh] flex items-center justify-center  before:fixed before:inset-0 before:z-0"
      ref={mainRef}
    >
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-bold text-white mb-10">Introducing Dolphin</h1>

        <div className="grid grid-cols-1 my-4 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl px-4">
          {features.map((feature, index) => (
            <FeatureSection
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <DownloadSection />
      </div>
      
    </main>
  );
}
