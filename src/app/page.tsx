'use client';

import Header from "@/components/header";
// import { useTheme } from "@/components/theme";


export default function Home() {
  // const { isDark, toggleTheme } = useTheme();

  const buttonData = {
    linkedin: "https://www.linkedin.com/in/cadeloar/",
    email: "mailto:cade.loar@gmail.com",
    github: "https://github.com/ctloar",
  }

  return (
    <>
      {/* <Header isDark={isDark} toggleTheme={toggleTheme} /> */}
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="text-center space-y-8 md:space-y-12">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] leading-tight">
          CADE LOAR
        </h1>
        
        {/* Subtitle */}
        <p className={`text-sm md:text-base font-light tracking-[0.15em] leading-relaxed max-w-2xl ${
          // isDark ? 'text-gray-300' : 'text-gray-600'
          'dark:text-gray-300 text-gray-600'
        }`}>
          SOFTWARE ENGINEER ___ AI GENERALIST ___ PRODUCT ENGINEER
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
            {
                Object.entries(buttonData).map(([key, value]) => (
                    <a 
                    key={key} 
                    href={value} 
                    target='_blank'
                    style={{ cursor: 'default' }}
                    className={`px-6 py-3 rounded-full border transition-all duration-200 text-sm font-light tracking-wide 
                      ${
                        // isDark 
                        // ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800' 
                        // : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
                        true
                    }
                    dark:hover:border-gray-400 dark:hover:bg-gray-800
                    `}
                    >
                    {key}
                    </a>
                ))
            }
        </div>
      </div>
    </main>
    </>
  );
}