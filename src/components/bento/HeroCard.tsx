import { motion } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.png";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bento-card bento-purple h-full min-h-[320px] md:min-h-[340px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      
      <div className="relative z-10 flex flex-col md:flex-row h-full gap-4 md:gap-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.span 
            className="text-3xl md:text-4xl mb-3"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Hi, I'm <span className="text-yellow-300">Jair León</span>
          </h1>
          
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            I am a <strong>full stack developer</strong> with experience in{" "}
            <strong>TypeScript</strong>, <strong>NestJS</strong>, <strong>Angular</strong>, and{" "}
            <strong>Python</strong>. I love building scalable applications and 
            exploring new technologies. I have a passion for clean code and 
            always put my all into my work.
          </p>
        </div>
        
        <div className="flex items-center justify-center md:justify-end">
          <motion.div 
            className="relative"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-2xl scale-110" />
            <img
              src={profileAvatar}
              alt="Jair León - Full Stack Developer"
              className="relative w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-white/20"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
