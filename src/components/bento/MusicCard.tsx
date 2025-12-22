import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MusicCard = () => {
  const { t } = useLanguage();

  // Sample album art URL (gradient placeholder representing album)
  const albumArtUrl = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bento-card bento-music h-full min-h-[140px] flex flex-col relative overflow-hidden"
    >
      {/* Album art as blurred background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${albumArtUrl})` }}
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      
      <div className="relative z-10 flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-white/80" />
          <span className="text-white/80 text-xs font-medium">Apple Music</span>
        </div>
        <span className="text-white/60 text-xs">{t.music.recentlyListened}</span>
      </div>
      
      <div className="relative z-10 flex items-center gap-3 flex-1">
        {/* Spinning vinyl/album art */}
        <motion.div 
          className="relative flex-shrink-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-2xl ring-2 ring-white/20">
            <img 
              src={albumArtUrl} 
              alt="Album cover"
              className="w-full h-full object-cover"
            />
            {/* Vinyl center hole effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black/80 ring-1 ring-white/30" />
            </div>
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
        
        {/* Audio visualizer bars */}
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
