import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageCard = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="bento-card bg-card h-full min-h-[80px] flex items-center justify-center gap-3 cursor-pointer group overflow-hidden relative"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--bento-blue) / 0.3), transparent 70%)"
        }}
      />

      <div className="relative z-10 flex items-center gap-3">
        <motion.div
          animate={{ rotate: language === "en" ? 0 : 360 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Globe className="w-6 h-6 text-bento-blue" />
        </motion.div>
        
        <div className="flex flex-col">
          <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
            {language === "en" ? t.language.es : t.language.en}
          </span>
          <span className="text-muted-foreground text-xs">
            {language === "en" ? "Switch language" : "Cambiar idioma"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageCard;
