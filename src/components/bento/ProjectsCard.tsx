import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsCard = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bento-card bg-card h-full min-h-[140px] relative overflow-hidden cursor-pointer group"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-3 left-3 text-[10px] text-muted-foreground font-mono">
          {"<div className=\"app\">"}
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] text-muted-foreground font-mono">
          {"</div>"}
        </div>
      </div>
      
      <div className="relative z-10 flex items-center justify-between h-full">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5 text-primary" />
            <h3 className="text-foreground font-bold text-lg">{t.projects.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            {t.projects.description}
          </p>
        </div>
        
        <motion.div
          className="ml-3"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
