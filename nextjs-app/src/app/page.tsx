"use client";
import DownloadSection from "@/components/layout/DownloadSection";
import FeatureSection from "@/components/layout/FeatureSection";
import ProposalCard from "@/components/layout/ProposalCard";
import { useEffect, useRef, useState } from "react";
import { FaUsers, FaShieldAlt, FaVoteYea, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { ConnectButton, useAccounts, useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";

export default function Home() {
  const suiClient = useSuiClient();
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [proposallist, setProposallist] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [allProposal, setAllProposal] = useState<any[]>([]);
  interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
  }

  interface Proposal {
    proposalId: string;
    proposalName: string;
    minThreshold: number;
    currentVoteWeight: number;
    lastVotingTime: string;
  }

  // const proposals: Proposal[] = [
  //   {
  //     proposalName: 'Increase Staking Rewards',
  //     minThreshold: 100,
  //     currentVoteWeight: 85,
  //     lastVotingTime: '2024-09-15 12:00 PM',
  //   },
  //   {
  //     proposalName: 'DAO Treasury Allocation',
  //     minThreshold: 200,
  //     currentVoteWeight: 150,
  //     lastVotingTime: '2024-09-14 10:00 AM',
  //   },
  //   {
  //     proposalName: 'Governance Upgrade',
  //     minThreshold: 250,
  //     currentVoteWeight: 200,
  //     lastVotingTime: '2024-09-13 04:30 PM',
  //   },
  //   {
  //     proposalName: 'Security Enhancement',
  //     minThreshold: 150,
  //     currentVoteWeight: 140,
  //     lastVotingTime: '2024-09-12 08:00 PM',
  //   },
  //   {
  //     proposalName: 'New Voting Mechanism',
  //     minThreshold: 180,
  //     currentVoteWeight: 170,
  //     lastVotingTime: '2024-09-11 11:15 AM',
  //   },
  // ];


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
      title: 'Robust Decentralized Storage',
      description: 'Used Walrus for its robust fault tolerance and efficient data availability verification, even under extreme conditions.',
      icon: <FaCogs />
    }
  ];

  const retrieve_proposals = async () => {
    console.log("clicked");
    try {
      const proposal_details = await suiClient.getObject({
        id: '0x510545dc37da1fb3459d79f260a457a2530df381f062b6d94ea8fc4c77cd3f05',
        options: {
          showContent: true,
          showDisplay: true,
          showOwner: true,
        },
      });

      const dynamicContentLinks = await suiClient.getDynamicFields({
        parentId: proposal_details.data?.content?.fields?.list?.fields?.id?.id,
      });

      const allSocialsObjectIds = dynamicContentLinks?.data.map((elm: any) => elm.objectId);

      let contentLinks = await suiClient.multiGetObjects({
        ids: allSocialsObjectIds,
        options: {
          showContent: true,
        },
      });
      setProposallist(contentLinks);


      let new_proposal: any [] =  [];
      for (let i = 0; i < contentLinks.length; i++) {
        const single_proposal = await suiClient.getObject({
          id: proposallist[i]?.data?.objectId,
          options: {
            showContent: true,
            showDisplay: true,
            showOwner: true,
          },
        });
        new_proposal.push(single_proposal?.data?.content?.fields?.value?.fields);
      };

      setAllProposal(new_proposal);

      setLoading(false);
      
    } catch (error) {
      console.error("Error fetching proposals:", error);
      setLoading(false); 
    }
  };

  // Call the retrieve_proposals function on initial render
  useEffect(() => {
    retrieve_proposals(); // Fetch proposals when component mounts
  }, [proposallist]);

  // console.log(proposallist)
  console.log(allProposal)
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
              {

                allProposal.map((proposal: any, index: any) => (
                  <ProposalCard
                    key={index}
                    proposalId={proposal?.id?.id}
                    proposalName={proposal.name}
                    minThreshold={proposal.min_threshold}
                    currentVoteWeight={proposal.weight}
                    lastVotingTime={proposal.last_voting_time}
                  />
                ))}
              {/* Duplicate the proposals for smooth looping */}
              {allProposal.map((proposal: any, index: any) => (
                <ProposalCard
                  key={`duplicate-${index}`}
                  proposalId={proposal?.id?.id}
                  proposalName={proposal.name}
                  minThreshold={proposal.min_threshold}
                  currentVoteWeight={proposal.weight}
                  lastVotingTime={proposal.last_voting_time}
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
