"use client"
import React, { useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

// --- Data Structure for Projects ---
const allProjects = [
   {
      id: 1,
      title: ' Compassionate Pet Care Services ',
      imageSrc: 'project3.png',
      categories: ['Front End Development', 'React', 'JavaScript'],
      description: 'Caring for your pets with love and professionalism. From walks to grooming, we keep tails wagging and purrs flowing!',
      liveLink: 'https://pet-care-app-1d8d1.web.app/category/1',
   },
   {
      id: 2,
      title: ' Finance Management App ',
      imageSrc: 'project1.png ',
      categories: ['Back End Development', 'Next.js', 'Laravel'],
      description: 'A full-stack time tracking application featuring secure user authentication, real-time data synchronization, and a robust API for reporting.',
      liveLink: 'https://finance-five-kappa.vercel.app',
   },
   {
      id: 3,
      title: ' Building Smarter Apps ',
      imageSrc: 'project4.png',
      categories: ['Front End Development', 'Tailwind CSS', 'React'],
      description: 'A complex data visualization dashboard created with React and Tailwind CSS, providing clients with actionable insights into their business metrics.',
      liveLink: 'https://lustrous-donut-d7446e.netlify.app',
   },
   {
      id: 4,
      title: ' E-commerce API Backend ',
      imageSrc: 'project2.png',
      categories: ['Back End Development', 'Laravel', 'JavaScript'],
      description: 'Developed a scalable RESTful API using Laravel for an e-commerce platform, handling product catalog, orders, and payment integration.',
      liveLink: 'https://askflow-d52d7.web.app',
   },
];

// Extract unique filter categories
const categories = [
   'All Projects',
   ...new Set(allProjects.flatMap(project => project.categories))
];

// --- Helper Component for a single project card ---
const ProjectCard = ({ project }) => (
   <div className=" border border-neutral-700/60 rounded-xl p-6 shadow-2xl mb-8 flex flex-col lg:flex-row items-center gap-8">
      {/* Project Image */}
      <div className="w-full lg:w-2/3 h-auto relative overflow-hidden rounded-lg">
         <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full object-cover transition-transform duration-500 hover:scale-[1.03] rounded-lg border border-neutral-700"
         />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
         <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            {project.title}
         </h3>
         <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 hidden lg:block">
            {project.description}
         </p>
         <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center lg:justify-start items-center space-x-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-500 transition-colors duration-300"
         >
            <span>Live Preview</span>
            <ArrowUpRightIcon className="w-5 h-5" />
         </a>
      </div>
   </div>
);

// --- Main Works Component ---
export default function Works() {
   const [activeFilter, setActiveFilter] = useState('All Projects');

   // Logic to filter projects based on the active tab
   const filteredProjects = activeFilter === 'All Projects'
      ? allProjects
      : allProjects.filter(project => project.categories.includes(activeFilter));

   return (
      <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 text-black dark:text-white">
         <div className="max-w-7xl mx-auto">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 uppercase tracking-widest">
               MY WORK
            </h1>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 p-2 bg-neutral-800 rounded-full shadow-inner border border-neutral-700">
               {categories.map((category) => (
                  <button
                     type="button" // ← Important: prevents page reload
                     key={category}
                     onClick={() => setActiveFilter(category)}
                     className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === category
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-700'
                        }`}
                  >
                     {category}
                  </button>
               ))}
            </div>

            {/* Project List */}
            <div className="space-y-12">
               {filteredProjects.length > 0 ? (
                  filteredProjects.map(project => (
                     <ProjectCard key={project.id} project={project} />
                  ))
               ) : (
                  <p className="text-center text-xl text-neutral-500 py-10">
                     No projects found for the selected category ({activeFilter}).
                  </p>
               )}
            </div>

         </div>
      </section>
   );
}
