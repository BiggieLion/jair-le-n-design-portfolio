import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const EmailCard = () => {
  return (
    <motion.a
      href="mailto:hello@jairleon.dev"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="bento-card bento-green h-full min-h-[140px] flex flex-col items-center justify-center text-center cursor-pointer group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Mail className="w-10 h-10 text-white mb-2" />
      </motion.div>
      
      <span className="text-white font-semibold">Email</span>
      <span className="text-white/70 text-xs mt-0.5">Get in touch</span>
    </motion.a>
  );
};

export default EmailCard;
