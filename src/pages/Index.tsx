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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jair León - Full Stack Developer</title>
        <meta
          name="description"
          content="Jair León - Full Stack Developer with 4+ years of experience in TypeScript, NestJS, Angular, Python, and Flask. Building scalable web applications."
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
