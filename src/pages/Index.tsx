import { Helmet } from "react-helmet-async";
import HeroCard from "@/components/bento/HeroCard";
import ExperienceCard from "@/components/bento/ExperienceCard";
import TechStackCard from "@/components/bento/TechStackCard";
import DiscordCard from "@/components/bento/DiscordCard";
import MusicCard from "@/components/bento/MusicCard";
import WeatherCard from "@/components/bento/WeatherCard";
import LinkedInCard from "@/components/bento/LinkedInCard";
import GitHubCard from "@/components/bento/GitHubCard";
import EmailCard from "@/components/bento/EmailCard";
import ProjectsCard from "@/components/bento/ProjectsCard";
import TimeCard from "@/components/bento/TimeCard";
import ThemeCard from "@/components/bento/ThemeCard";
import LanguageCard from "@/components/bento/LanguageCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Jair León - Full Stack Developer</title>
        <meta
          name="description"
          content={
            language === "es"
              ? "Jair León - Desarrollador Full Stack con más de 4 años de experiencia en TypeScript, NestJS, Angular, Python y Flask. Construyendo aplicaciones web escalables."
              : "Jair León - Full Stack Developer with 4+ years of experience in TypeScript, NestJS, Angular, Python, and Flask. Building scalable web applications."
          }
        />
      </Helmet>

      <main className="min-h-screen bg-background py-6 px-4 md:py-10 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 md:gap-5">
            {/* Row 1 */}
            <div className="col-span-2 row-span-2">
              <HeroCard />
            </div>
            <ExperienceCard />
            <DiscordCard />
            
            {/* Row 2 */}
            <div className="col-span-2">
              <TechStackCard />
            </div>
            
            {/* Row 3 */}
            <LinkedInCard />
            <GitHubCard />
            <div className="col-span-2">
              <MusicCard />
            </div>
            
            {/* Row 4 */}
            <WeatherCard />
            <TimeCard />
            <div className="col-span-2">
              <ProjectsCard />
            </div>
            
            {/* Row 5 */}
            <EmailCard />
            <ThemeCard />
            <LanguageCard />
            <div className="col-span-1" /> {/* Empty spacer for alignment */}
          </div>

          {/* Mobile Grid Layout */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <div className="col-span-2">
              <HeroCard />
            </div>
            <ExperienceCard />
            <DiscordCard />
            <div className="col-span-2">
              <TechStackCard />
            </div>
            <LinkedInCard />
            <GitHubCard />
            <div className="col-span-2">
              <MusicCard />
            </div>
            <WeatherCard />
            <TimeCard />
            <div className="col-span-2">
              <ProjectsCard />
            </div>
            <div className="col-span-2">
              <EmailCard />
            </div>
            <ThemeCard />
            <LanguageCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
