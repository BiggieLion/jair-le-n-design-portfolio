import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const technologies = [
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "NestJS", color: "bg-red-500" },
  { name: "Angular", color: "bg-red-600" },
  { name: "Python", color: "bg-green-500" },
  { name: "Flask", color: "bg-gray-500" },
];

const TechStackCard = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bento-card bg-card h-full min-h-[120px]"
    >
      <h3 className="text-foreground font-semibold text-base mb-3">{t.techStack.title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full cursor-default"
          >
            <span className={`w-2 h-2 rounded-full ${tech.color}`} />
            <span className="text-foreground text-sm font-medium">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackCard;
