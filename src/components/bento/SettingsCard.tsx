import { motion } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const SettingsCard = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bento-card bg-card h-full min-h-[80px] flex items-center justify-center gap-4"
    >
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-bento-yellow" />
        ) : (
          <Moon className="w-4 h-4 text-primary" />
        )}
        <span className="text-foreground text-sm font-medium">
          {theme === "dark" ? t.theme.light : t.theme.dark}
        </span>
      </motion.button>

      {/* Language Toggle */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage(language === "en" ? "es" : "en")}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-accent transition-colors"
      >
        <Globe className="w-4 h-4 text-bento-blue" />
        <span className="text-foreground text-sm font-medium">
          {language === "en" ? t.language.es : t.language.en}
        </span>
      </motion.button>
    </motion.div>
  );
};

export default SettingsCard;
