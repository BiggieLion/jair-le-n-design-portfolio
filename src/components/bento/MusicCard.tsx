import { motion } from "framer-motion";
import { Music } from "lucide-react";

const MusicCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bento-card bento-music h-full min-h-[140px] flex flex-col relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      
      <div className="relative z-10 flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-white/80" />
          <span className="text-white/80 text-xs font-medium">Apple Music</span>
        </div>
        <span className="text-white/60 text-xs">Recently Listened</span>
      </div>
      
      <div className="relative z-10 flex items-center gap-3 flex-1">
        <motion.div 
          className="relative flex-shrink-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg">
            <Music className="w-6 h-6 text-white" />
          </div>
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-base truncate">
            Blinding Lights
          </h3>
          <p className="text-white/70 text-sm truncate">
            The Weeknd
          </p>
          <p className="text-white/50 text-xs truncate">
            After Hours
          </p>
        </div>
        
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-white/80 rounded-full"
              animate={{ height: [10, 20, 10] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MusicCard;
