import { motion } from "framer-motion";
import { Cloud, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WeatherCard = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bento-card bg-card h-full min-h-[140px] flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{t.weather.yourCity}</span>
        </div>
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Cloud className="w-8 h-8 text-bento-blue" />
        </motion.div>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-foreground">24°</span>
          <span className="text-muted-foreground text-xs mb-1">C</span>
        </div>
        <p className="text-muted-foreground text-xs mt-0.5">
          {t.weather.partlyCloudy}
        </p>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
