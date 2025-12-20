import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const LinkedInCard = () => {
  return (
    <motion.a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="bento-card bento-blue h-full min-h-[140px] flex flex-col items-center justify-center text-center cursor-pointer group relative"
    >
      <ExternalLink className="absolute top-4 right-4 w-3.5 h-3.5 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <motion.svg
        className="w-12 h-12 text-white mb-2"
        viewBox="0 0 24 24"
        fill="currentColor"
        whileHover={{ scale: 1.1 }}
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </motion.svg>
      
      <span className="text-white font-semibold">LinkedIn</span>
    </motion.a>
  );
};

export default LinkedInCard;
