'use client';

import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies and best practices.',
    icon: <FaCode className="w-6 h-6" />,
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions with scalable architecture and optimal performance.',
    icon: <FaServer className="w-6 h-6" />,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: <FaMobileAlt className="w-6 h-6" />,
  },
  {
    title: 'Database Solutions',
    description: 'Efficient data management systems with optimized queries and security.',
    icon: <FaDatabase className="w-6 h-6" />,
  },
  {
    title: 'Security Implementation',
    description: 'Comprehensive security measures to protect your applications and data.',
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    title: 'Performance Optimization',
    description: 'Enhanced application performance through optimization and monitoring.',
    icon: <FaChartLine className="w-6 h-6" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-2">
            Comprehensive solutions tailored to your business needs, delivered with precision and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 active:transform active:scale-95 sm:hover:-translate-y-1"
            >
              <div className="mb-4 sm:mb-6 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 