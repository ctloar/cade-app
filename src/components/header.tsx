'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import ThemeSwitcher from './themeSwitcher';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header() {

    const pages = ["about", "thoughts", "projects", "fun"];

  return (
    <header className='top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-transparent flex justify-between items-center p-6 md:p-8'>
      <div className='text-xl font-light tracking-wider transition-all duration-300 cursor-default'
      style={{ cursor: 'default' }}
      onClick={
        () => window.location.href = '/'}>
        _CL
      </div>
      
      <nav className='hidden md:flex space-x-12 text-sm font-light tracking-wide transition-all duration-300'>
        {
            pages.map((page) => (
                <a 
                key={page} 
                href={`/${page}`} 
                style={{ cursor: 'default' }}
                className='hover:opacity-60 transition-opacity duration-200 dark:text-gray-300 text-gray-600'
                
                >
                {page.toUpperCase()}
                </a>
            ))
        }
      </nav>
      <ThemeSwitcher />
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-50">
        <div className='flex justify-center space-x-8 py-3 rounded-full backdrop-blur-sm dark:text-gray-300 text-gray-600 bg-white/80 border-gray-200/50'>
          {
            pages.map((page) => (
                <a 
                key={page} 
                href={`/${page}`} 
                className='text-xs font-light tracking-wide hover:opacity-60 transition-opacity'
                >
                {page.toUpperCase()}
                </a>
            ))
          }
        </div>
      </nav>
    </header>
  );
}