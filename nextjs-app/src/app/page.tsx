"use client";
import DownloadSection from "@/components/layout/DownloadSection";
import FeatureSection from "@/components/layout/FeatureSection";
import ProposalCard from "@/components/layout/ProposalCard";
import { useRef } from "react";
import { FaUsers, FaShieldAlt, FaVoteYea, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
  }

  interface Proposal {
    proposalName: string;
    minThreshold: number;
    currentVoteWeight: number;
    lastVotingTime: string;
  }

  const proposals: Proposal[] = [
    {
      proposalName: 'Increase Staking Rewards',
      minThreshold: 100,
      currentVoteWeight: 85,
      lastVotingTime: '2024-09-15 12:00 PM',
    },
    {
      proposalName: 'DAO Treasury Allocation',
      minThreshold: 200,
      currentVoteWeight: 150,
      lastVotingTime: '2024-09-14 10:00 AM',
    },
    {
      proposalName: 'Governance Upgrade',
      minThreshold: 250,
      currentVoteWeight: 200,
      lastVotingTime: '2024-09-13 04:30 PM',
    },
    {
      proposalName: 'Security Enhancement',
      minThreshold: 150,
      currentVoteWeight: 140,
      lastVotingTime: '2024-09-12 08:00 PM',
    },
    {
      proposalName: 'New Voting Mechanism',
      minThreshold: 180,
      currentVoteWeight: 170,
      lastVotingTime: '2024-09-11 11:15 AM',
    },
  ];


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
      className="flex items-center justify-center  before:fixed before:inset-0 before:z-0 mb-4"
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

        {/* Proposals Section */}
        <div className="my-4">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Recent Proposals</h2>
          
           {/* Proposals Scrolling Animation */}
        <div className="overflow-hidden w-full max-w-7xl px-4">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ['100%', '-100%'] }} // Move from right to left
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: 'linear',
            }}
          >
            {proposals.map((proposal, index) => (
              <ProposalCard
                key={index}
                proposalName={proposal.proposalName}
                minThreshold={proposal.minThreshold}
                currentVoteWeight={proposal.currentVoteWeight}
                lastVotingTime={proposal.lastVotingTime}
              />
            ))}
            {/* Duplicate the proposals for smooth looping */}
            {proposals.map((proposal, index) => (
              <ProposalCard
                key={`duplicate-${index}`}
                proposalName={proposal.proposalName}
                minThreshold={proposal.minThreshold}
                currentVoteWeight={proposal.currentVoteWeight}
                lastVotingTime={proposal.lastVotingTime}
              />
            ))}
          </motion.div>
        </div>
        </div>

        <DownloadSection />
      </div>

    </main>
  );
}
