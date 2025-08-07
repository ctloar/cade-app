'use client';
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function LandingPage() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Header Navigation */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <div className="text-xl font-light tracking-wider">
          _CL
        </div>
        
        <nav className="hidden md:flex space-x-12 text-sm font-light tracking-wide">
          <a 
            href="#about" 
            className={`hover:opacity-60 transition-opacity duration-200 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            ABOUT
          </a>
          <a 
            href="#journal" 
            className={`hover:opacity-60 transition-opacity duration-200 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            JOURNAL
          </a>
          <a 
            href="#projects" 
            className={`hover:opacity-60 transition-opacity duration-200 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            PROJECTS
          </a>
          <a 
            href="#fun" 
            className={`hover:opacity-60 transition-opacity duration-200 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            FUN
          </a>
        </nav>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-200 ${
            isDark 
              ? 'hover:bg-gray-800 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] leading-tight">
            CADE LOAR
          </h1>
          
          {/* Subtitle */}
          <p className={`text-sm md:text-base font-light tracking-[0.15em] leading-relaxed max-w-2xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            SOFTWARE ENGINEER ___ AI GENERALIST ___ PRODUCT ENGINEER
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
            <button className={`px-6 py-3 rounded-full border transition-all duration-200 text-sm font-light tracking-wide ${
              isDark 
                ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800' 
                : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
            }`}>
              email
            </button>
            <button className={`px-6 py-3 rounded-full border transition-all duration-200 text-sm font-light tracking-wide ${
              isDark 
                ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800' 
                : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
            }`}>
              linkedin
            </button>
            <button className={`px-6 py-3 rounded-full border transition-all duration-200 text-sm font-light tracking-wide ${
              isDark 
                ? 'border-gray-600 hover:border-gray-400 hover:bg-gray-800' 
                : 'border-gray-300 hover:border-gray-500 hover:bg-gray-50'
            }`}>
              github
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 p-4">
        <div className={`flex justify-center space-x-8 py-3 rounded-full backdrop-blur-sm ${
          isDark 
            ? 'bg-gray-900/80 border border-gray-700' 
            : 'bg-white/80 border border-gray-200'
        }`}>
          <a href="#about" className="text-xs font-light tracking-wide hover:opacity-60 transition-opacity">
            ABOUT
          </a>
          <a href="#journal" className="text-xs font-light tracking-wide hover:opacity-60 transition-opacity">
            JOURNAL
          </a>
          <a href="#projects" className="text-xs font-light tracking-wide hover:opacity-60 transition-opacity">
            PROJECTS
          </a>
          <a href="#fun" className="text-xs font-light tracking-wide hover:opacity-60 transition-opacity">
            FUN
          </a>
        </div>
      </nav>
    </div>
  );
}