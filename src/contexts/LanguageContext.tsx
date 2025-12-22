import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface Translations {
  hero: {
    greeting: string;
    name: string;
    description: string;
  };
  experience: {
    label: string;
    years: string;
  };
  discord: {
    online: string;
  };
  music: {
    recentlyListened: string;
  };
  weather: {
    yourCity: string;
    sunny: string;
    cloudy: string;
    rainy: string;
    snowy: string;
    stormy: string;
    windy: string;
  };
  techStack: {
    title: string;
  };
  projects: {
    title: string;
    description: string;
  };
  time: {
    localTime: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  language: {
    en: string;
    es: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Jair León",
      description:
        "I am a full stack developer with experience in TypeScript, NestJS, Angular, and Python. I love building scalable applications and exploring new technologies. I have a passion for clean code and always put my all into my work.",
    },
    experience: {
      label: "Experience",
      years: "Years",
    },
    discord: {
      online: "Online",
    },
    music: {
      recentlyListened: "Recently Listened",
    },
    weather: {
      yourCity: "Your City",
      sunny: "Sunny",
      cloudy: "Cloudy",
      rainy: "Rainy",
      snowy: "Snowy",
      stormy: "Stormy",
      windy: "Windy",
    },
    techStack: {
      title: "Tech Stack",
    },
    projects: {
      title: "Projects & Work",
      description:
        "Explore my portfolio of applications, experiments, and open-source contributions.",
    },
    time: {
      localTime: "Local Time",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
    language: {
      en: "English",
      es: "Español",
    },
  },
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Jair León",
      description:
        "Soy un desarrollador full stack con experiencia en TypeScript, NestJS, Angular y Python. Me encanta construir aplicaciones escalables y explorar nuevas tecnologías. Tengo pasión por el código limpio y siempre doy lo mejor de mí en mi trabajo.",
    },
    experience: {
      label: "Experiencia",
      years: "Años",
    },
    discord: {
      online: "En línea",
    },
    music: {
      recentlyListened: "Escuchado recientemente",
    },
    weather: {
      yourCity: "Tu ciudad",
      sunny: "Soleado",
      cloudy: "Nublado",
      rainy: "Lluvioso",
      snowy: "Nevando",
      stormy: "Tormenta",
      windy: "Ventoso",
    },
    techStack: {
      title: "Tecnologías",
    },
    projects: {
      title: "Proyectos y Trabajo",
      description:
        "Explora mi portafolio de aplicaciones, experimentos y contribuciones de código abierto.",
    },
    time: {
      localTime: "Hora local",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
    },
    language: {
      en: "English",
      es: "Español",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
