import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

const TimeCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bento-card bg-card h-full min-h-[140px] flex flex-col items-center justify-center text-center"
    >
      <Clock className="w-5 h-5 text-muted-foreground mb-2" />
      <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </span>
      <span className="text-muted-foreground text-xs mt-1">Local Time</span>
    </motion.div>
  );
};

export default TimeCard;
