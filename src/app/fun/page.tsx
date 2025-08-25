'use client';

import React from 'react';
import Header from '@/components/header';

export default function Projects(){
  return (
    <>
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">

        <div className="p-6">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">Fun facts</h1>
        <div className="flex flex-col gap-6">
        <iframe allow="autoplay *; encrypted-media *;" height="450" style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/bad-bunny/pl.u-55D6XP3F6e5xKvR"></iframe>

        </div>
        </div>
        </main>
    </>
  );
};
