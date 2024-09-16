import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: ReactNode; // ReactNode allows any valid React element or node
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-white p-6 text-center rounded-lg shadow-lg backdrop-blur-md bg-opacity-10"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center mb-4 text-4xl text-indigo-600">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </motion.div>
  );
};

export default FeatureSection;
