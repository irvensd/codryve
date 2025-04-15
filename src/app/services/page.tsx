'use client';

import React from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase, FaShieldAlt, FaChartLine, FaCog, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description: 'We create stunning, responsive websites that not only look great but also perform exceptionally well. Our web development services are tailored to meet your specific business needs.',
    icon: <FaCode className="w-8 h-8" />,
    features: [
      'Custom website design and development',
      'Responsive and mobile-first approach',
      'Performance optimization',
      'SEO implementation',
      'Content management system integration',
      'E-commerce solutions',
      'Analytics and tracking setup'
    ],
    price: 'Starting at $1,000'
  },
  {
    title: 'SaaS Development',
    description: 'Transform your business with our custom SaaS solutions. We build scalable, secure, and user-friendly software that helps you streamline operations and grow your business.',
    icon: <FaServer className="w-8 h-8" />,
    features: [
      'Custom backend development',
      'User authentication and authorization',
      'Payment gateway integration',
      'API development and documentation',
      'Cloud infrastructure setup',
      'Database design and optimization',
      'Analytics and reporting tools'
    ],
    price: 'Starting at $4,000'
  },
  {
    title: 'Mobile Development',
    description: 'We develop high-performance mobile applications for both iOS and Android platforms. Our apps are designed to provide seamless user experiences and drive engagement.',
    icon: <FaMobile className="w-8 h-8" />,
    features: [
      'Cross-platform mobile development',
      'Native iOS and Android apps',
      'Push notification implementation',
      'Offline functionality',
      'App store deployment',
      'User analytics integration',
      'Security implementation'
    ],
    price: 'Starting at $5,000'
  }
];

const additionalServices = [
  {
    title: 'Database Solutions',
    description: 'Efficient data management systems with optimized queries and security.',
    icon: <FaDatabase className="w-6 h-6" />
  },
  {
    title: 'Security Implementation',
    description: 'Comprehensive security measures to protect your applications and data.',
    icon: <FaShieldAlt className="w-6 h-6" />
  },
  {
    title: 'Performance Optimization',
    description: 'Enhanced application performance through optimization and monitoring.',
    icon: <FaChartLine className="w-6 h-6" />
  },
  {
    title: 'DevOps Services',
    description: 'Streamlined development and deployment processes for better efficiency.',
    icon: <FaCog className="w-6 h-6" />
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. We combine technical expertise with creative innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="mb-6 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-light text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <FaCheck className="w-4 h-4 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-blue-400 font-light mb-6">{service.price}</div>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-blue-400 text-gray-900 rounded-md font-light hover:bg-blue-500 transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Additional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We also offer specialized services to enhance your digital presence and ensure optimal performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-gray-900 rounded-md font-light hover:opacity-90 transition-opacity duration-300"
            >
              Contact Us for a Custom Solution
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 