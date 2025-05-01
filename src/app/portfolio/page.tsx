'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaChartLine } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with payment integration and inventory management.',
    category: 'Web Development',
    icon: <FaCode className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    category: 'Mobile App',
    icon: <FaMobile className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for business intelligence and data visualization.',
    category: 'SaaS',
    icon: <FaServer className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Marketing Platform',
    description: 'Comprehensive digital marketing platform with campaign management and analytics.',
    category: 'Marketing',
    icon: <FaChartLine className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {project.icon}
                  </div>
                  <span className="text-sm text-gray-400">{project.category}</span>
                </div>
                <h3 className="text-xl font-light text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 