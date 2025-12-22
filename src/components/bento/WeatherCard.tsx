import { motion } from "framer-motion";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

type WeatherType = "sunny" | "cloudy" | "rainy" | "snowy" | "stormy" | "windy";

interface WeatherConfig {
  icon: typeof Sun;
  gradient: string;
  temp: number;
}

const weatherConfigs: Record<WeatherType, WeatherConfig> = {
  sunny: { icon: Sun, gradient: "from-amber-400 to-orange-500", temp: 28 },
  cloudy: { icon: Cloud, gradient: "from-slate-400 to-slate-600", temp: 22 },
  rainy: { icon: CloudRain, gradient: "from-blue-400 to-indigo-600", temp: 18 },
  snowy: { icon: CloudSnow, gradient: "from-cyan-200 to-blue-300", temp: -2 },
  stormy: { icon: CloudLightning, gradient: "from-purple-500 to-slate-700", temp: 16 },
  windy: { icon: Wind, gradient: "from-teal-400 to-cyan-500", temp: 20 },
};

const weatherTypes: WeatherType[] = ["sunny", "cloudy", "rainy", "snowy", "stormy", "windy"];

const WeatherCard = () => {
  const { t } = useLanguage();
  const [weatherIndex, setWeatherIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherIndex((prev) => (prev + 1) % weatherTypes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentWeather = weatherTypes[weatherIndex];
  const config = weatherConfigs[currentWeather];
  const WeatherIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bento-card bg-card h-full min-h-[140px] flex flex-col justify-between overflow-hidden relative"
    >
      {/* Animated background gradient */}
      <motion.div
        key={currentWeather}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{t.weather.yourCity}</span>
        </div>
        <motion.div
          key={currentWeather}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0, y: [0, -3, 0] }}
          transition={{ 
            scale: { duration: 0.4 },
            y: { duration: 3, repeat: Infinity }
          }}
        >
          <WeatherIcon className={`w-8 h-8 bg-gradient-to-br ${config.gradient} bg-clip-text`} style={{
            color: currentWeather === "sunny" ? "#f59e0b" : 
                   currentWeather === "cloudy" ? "#64748b" :
                   currentWeather === "rainy" ? "#3b82f6" :
                   currentWeather === "snowy" ? "#22d3ee" :
                   currentWeather === "stormy" ? "#a855f7" : "#14b8a6"
          }} />
        </motion.div>
      </div>
      
      <div className="relative z-10 mt-auto">
        <motion.div 
          key={config.temp}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-end gap-1"
        >
          <span className="text-3xl font-bold text-foreground">{config.temp}°</span>
          <span className="text-muted-foreground text-xs mb-1">C</span>
        </motion.div>
        <motion.p 
          key={currentWeather + "-label"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground text-xs mt-0.5 capitalize"
        >
          {t.weather[currentWeather]}
        </motion.p>
      </div>

      {/* Weather indicator dots */}
      <div className="absolute bottom-2 right-2 flex gap-1">
        {weatherTypes.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === weatherIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WeatherCard;
