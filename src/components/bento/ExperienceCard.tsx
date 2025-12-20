import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bento-card bento-coral h-full min-h-[140px] flex flex-col items-center justify-center text-center"
    >
      <span className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
        Experience
      </span>
      <motion.span 
        className="text-5xl md:text-6xl font-bold text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
      >
        +4
      </motion.span>
      <span className="text-white/90 text-xs font-semibold uppercase tracking-wider mt-1">
        Years
      </span>
    </motion.div>
  );
};

export default ExperienceCard;
