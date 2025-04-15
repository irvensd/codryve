'use client';

import React from 'react';
import { FaCode, FaMobile, FaCloud } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Web Development Projects',
      icon: FaCode,
      description: 'Custom websites and web applications',
      category: 'Web'
    },
    {
      title: 'Mobile App Projects',
      icon: FaMobile,
      description: 'iOS and Android applications',
      category: 'Mobile'
    },
    {
      title: 'SaaS Solutions',
      icon: FaCloud,
      description: 'Software as a Service platforms',
      category: 'SaaS'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-light">
                    Coming Soon
                  </span>
                </div>
              </div>
              
              <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-6">
                <project.icon className="text-blue-400 text-xl" />
              </div>
              
              <h3 className="text-2xl font-light text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              
              <div className="flex items-center">
                <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            We&apos;re currently working on exciting new projects. Check back soon to see our latest work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 