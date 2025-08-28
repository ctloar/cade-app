'use client';

import React from 'react';
import Header from '@/components/header';
import { projects } from '@/lib/projects';
import { FaGithub, FaYoutube, FaLink, FaNewspaper, FaRegFilePdf, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Projects: React.FC = () => {
  return (
    <>
    <Header />
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      <div className="p-6">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">PROJECTS</h1>
        <div className="flex flex-col gap-6">
          <p><i>Many of my projects are either private or no longer live, 
            but I've provided all the information I have available to showcase what they are.
            I'm always working on something new, so feel free to reach out if you'd like to 
            know more about past or present projects!</i>
          </p>
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center border border-gray-300 rounded-lg p-4"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <div className="flex flex-wrap mt-3 gap-2">
                  {project.tags?.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 mb-2 text-xs bg-gray-100 dark:bg-gray-800 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="dark:text-gray-300 text-gray-700 mt-3">{project.description}</p>
                <div className='mt-3 flex items-center gap-3'>
                  {project.links?.map((link, idx) => ( 
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: 'default' }}
                      className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      <span>{link.type}</span>
                      <FaArrowUpRightFromSquare size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default Projects;