import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const ThemeCard = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleTheme}
      className="bento-card bg-card h-full min-h-[80px] flex items-center justify-center gap-3 cursor-pointer group overflow-hidden relative"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: theme === "dark" 
            ? "radial-gradient(circle at 30% 50%, hsl(var(--bento-yellow) / 0.3), transparent 70%)"
            : "radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.3), transparent 70%)"
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 flex items-center gap-3">
        <motion.div
          animate={{ rotate: theme === "dark" ? 0 : 180 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-bento-yellow" />
          ) : (
            <Moon className="w-6 h-6 text-primary" />
          )}
        </motion.div>
        
        <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
          {theme === "dark" ? t.theme.light : t.theme.dark}
        </span>
      </div>
    </motion.div>
  );
};

export default ThemeCard;
