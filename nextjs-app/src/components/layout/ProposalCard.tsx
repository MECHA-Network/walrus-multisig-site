import { motion } from 'framer-motion';

interface ProposalCardProps {
    proposalId: string;
    proposalName: string;
    minThreshold: number;
    currentVoteWeight: number;
    lastVotingTime: string;
}

const ProposalCard: React.FC<ProposalCardProps> = ({
    proposalId,
    proposalName,
    minThreshold,
    currentVoteWeight,
    lastVotingTime,
}) => {
    const date = new Date(parseInt(lastVotingTime));
    const readableDate = date.toLocaleString();

    return (
        <motion.div
            style={{
                minWidth: "400px", margin: "0"
            }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg backdrop-blur-md bg-opacity-10 flex flex-col items-center text-center h-full justify-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h3 className="text-xl font-bold text-white mb-2">{proposalName}</h3>
            <p className="text-gray-200 mb-1">Proposal Id: {proposalId.slice(0, 10)}...</p>
            <p className="text-gray-200 mb-1">Min Threshold: {minThreshold}</p>
            <p className="text-gray-200 mb-1">Current Vote Weight: {currentVoteWeight}</p>
            <p className="text-gray-400 text-sm">Last Voting Time: {readableDate}</p>
        </motion.div>
    );
};

export default ProposalCard;
