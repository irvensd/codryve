'use client';

import React from 'react';
import { FaSearch, FaPencilAlt, FaCode, FaCheck } from 'react-icons/fa';

const Process: React.FC = () => {
  const steps = [
    {
      icon: FaSearch,
      title: 'Discovery',
      description: 'We begin by understanding your business goals, target audience, and project requirements.',
    },
    {
      icon: FaPencilAlt,
      title: 'Design',
      description: 'Our team creates wireframes and designs that align with your brand and user experience goals.',
    },
    {
      icon: FaCode,
      title: 'Development',
      description: 'We build your solution using modern technologies and best practices, with regular updates.',
    },
    {
      icon: FaCheck,
      title: 'Launch & Support',
      description: 'After thorough testing, we launch your project and provide ongoing support and maintenance.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a proven development process to ensure quality and efficiency in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="text-blue-500 text-xl" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-8 h-1 bg-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 