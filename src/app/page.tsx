'use client';

import Header from "@/components/header";

export default function Home() {

  const buttonData = {
    linkedin: "https://www.linkedin.com/in/cadeloar/",
    email: "mailto:cade.loar@gmail.com",
    github: "https://github.com/ctloar",
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <div className="text-center space-y-8 md:space-y-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] leading-tight">
          Cade Loar
        </h1>
        <p className='text-sm md:text-base font-light tracking-[0.15em] leading-relaxed max-w-2xl dark:text-gray-300 text-gray-600'>
          SOFTWARE ENGINEER ___ AI ENTHUSIAST ___ PROBLEM SOLVER
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
            {
                Object.entries(buttonData).map(([key, value]) => (
                    <a 
                    key={key} 
                    href={value} 
                    target='_blank'
                    style={{ cursor: 'default' }}
                    className='px-6 py-3 rounded-full border transition-all duration-200 text-sm font-light tracking-wide hover:bg-gray-100 dark:hover:border-gray-400 dark:hover:bg-gray-800'
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