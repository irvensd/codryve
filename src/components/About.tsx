'use client';

import React from 'react';
import { FaCode, FaUsers, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">About Workloom Studio</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We transform ideas into digital reality through innovative web and app development solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <FaCode className="text-blue-500 text-lg sm:text-xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 md:mb-4">Expert Development</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Our team of experienced developers crafts clean, efficient, and scalable solutions using the latest technologies.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <FaUsers className="text-purple-500 text-lg sm:text-xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 md:mb-4">Client-Centric Approach</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We work closely with our clients to understand their needs and deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <FaRocket className="text-green-500 text-lg sm:text-xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-light text-gray-900 mb-3 md:mb-4">Innovation Driven</h3>
            <p className="text-sm sm:text-base text-gray-600">
              We stay ahead of the curve, implementing cutting-edge solutions to keep your business competitive.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 md:mb-6">Our Mission</h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
            At Workloom Studio, we&apos;re committed to delivering exceptional digital solutions that drive business growth. 
            We believe in the power of technology to transform businesses and create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 