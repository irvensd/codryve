'use client';

import React, { useState } from 'react';
import { FaCode, FaServer, FaMobile, FaMegaport } from 'react-icons/fa';
import GetStartedForm from './GetStartedForm';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies',
    icon: <FaCode className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'SaaS Development',
    description: 'Scalable software solutions for your business',
    icon: <FaServer className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform mobile applications',
    icon: <FaMobile className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach',
    icon: <FaMegaport className="w-5 h-5 sm:w-6 sm:h-6" />,
  }
];

const Hero: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleGetStarted = () => {
    setIsFormOpen(true);
  };

  return (
    <section className="min-h-[85vh] flex items-center py-8 sm:py-12 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 leading-tight px-2">
            Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Reality</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-3 sm:px-4 max-w-2xl mx-auto">
            We craft exceptional digital experiences that drive growth and innovation for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button 
              onClick={handleGetStarted}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-400 text-gray-900 rounded-md font-light hover:bg-blue-500 active:bg-blue-600 transition-colors duration-300 text-sm sm:text-base"
            >
              Get Started
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-600 text-white rounded-md font-light hover:border-blue-400 active:bg-gray-800 transition-colors duration-300 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto px-4 sm:px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 active:transform active:scale-95 sm:hover:-translate-y-1"
            >
              <div className="mb-2 sm:mb-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 flex items-center justify-start">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-light text-white mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <GetStartedForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType="web"
      />
    </section>
  );
};

export default Hero; 