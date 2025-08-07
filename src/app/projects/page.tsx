'use client';

import React from 'react';
import Header from '@/components/header';
import { projects } from '@/lib/projects';

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   imageUrl: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     name: 'Personal Portfolio',
//     description: 'A personal portfolio website to showcase my projects and skills.',
//     imageUrl: '/images/portfolio.jpg',
//   },
//   {
//     id: 2,
//     name: 'E-commerce Platform',
//     description: 'A full-stack e-commerce platform with user authentication and payment integration.',
//     imageUrl: '/images/ecommerce.jpg',
//   },
//   {
//     id: 3,
//     name: 'Weather App',
//     description: 'A weather forecasting app using OpenWeatherMap API.',
//     imageUrl: '/images/weather-app.jpg',
//   },
// ];

const Projects: React.FC = () => {
  return (
    <>
    <Header />
    <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">

    <div className="p-6">
      <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12">PROJECTS</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
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