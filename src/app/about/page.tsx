'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';

const About: React.FC = () => {

  const careerData = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'STAX.AI',
        duration: 'Jan 2025 - Jul 2025',
        location: 'Scottsdale, AZ',
        link: 'https://stax.ai',
    },
    {
        id: 2,
        title: 'Full Stack Software Engineer',
        company: 'Affinitiv, Inc',
        duration: 'Jun 2024 - Oct 2024',
        location: 'Remote (Provo, UT)',
        link: 'https://affinitiv.com',
    },
    {
        id: 3,
        title: 'Founding Software Engineer',
        company: 'EYARC Experience',
        duration: 'Feb 2024 - Aug 2024',
        location: 'Provo, UT',
        link: 'https://experience.eyarc.site',
    },
    {
        id: 4,
        title: 'Full Stack Software Developer',
        company: 'The Church of Jesus Christ of Latter-day Saints',
        duration: 'Apr 2022 - Feb 2024',
        location: 'Provo, UT',
        link: 'https://churchofjesuschrist.org',
    },
  ]

  return (
    <>
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        {/* About Me Section */}
        <section className="mb-20">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">
            ABOUT ME
          </h1>
          <div className='inline'>

            <Image 
                className='float-right mb-6 ml-8 w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl' 
                src={'/images/headshot.jpg'} 
                alt='Pic of me :)' 
                width={200} 
                height={200} 
            />
            
            <p className='text-lg font-light leading-relaxed'>
            Hi! I'm Cade 👋
            <span className='block mb-4'></span>
            As a full-stack, user-focused software engineer, I'm passionate about building thoughtful, 
            intuitive products that leave users smiling. 
            <span className='block mb-4'></span>
            I combine strong technical skills with a sharp 
            eye for UX and clear communication—bridging the gap between engineering and real user needs.
            <span className='block mb-4'></span>
            I earned Master's and Bachelor's degrees in Information Systems Management from BYU, where I
            developed a strong foundation in software engineering, cloud architecture, and product management.
            <span className='block mb-4' />
            I love to watch and play basketball, travel, learn new skills, try new restaurants, 
            and hang out with friends and family. 
            When I'm not building a product or exploring the latest AI developments, 
            you'll probably find me on a basketball court, planning my next travel adventure, 
            or trying to convince my friends and family to check out a new restaurant!
            </p>
            
            {/* Clear float */}
            <div className="clear-both"></div>
          </div>
        </section>
        
        {/* Career Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
            CAREER
          </h2>
          
          <div className="space-y-6">
            <p className='text-base font-light leading-relaxed'>
              My career so far...
            </p>

            {
                careerData.map((career) => (
                    <div key={career.id} className={`border-l-2 pl-6 ${
                        'dark:border-gray-600 light:border-gray-300'
                    }`}>
                        <div className="space-y-2">
                        <h3 className={`text-lg ${
                            'dark:text-white light:text-text-light'
                        }`}>
                            <a className='font-medium text-blue-300' href={career.link} target='_blank'>{career.company}</a> • <span className='font-light'>{career.title}</span>
                        </h3>
                        <p className={`text-sm ${
                            'dark:text-gray-400 light:text-gray-500'
                        }`}>
                            {career.duration} • {career.location}
                        </p>
                        </div>
                    </div>
                ))
            }
          </div>
        </section>
      </main>
    </>
  );
}

export default About;