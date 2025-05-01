'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-white mb-4">
              Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get in touch with us to discuss your project and how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h2 className="text-xl font-light text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="w-5 h-5 text-blue-400 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-base font-light text-white">Email</h3>
                      <p className="text-sm text-gray-400">
                        <a href="mailto:support@codryve.com" className="hover:text-blue-400 transition-colors duration-300">
                          support@codryve.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="w-5 h-5 text-blue-400 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-base font-light text-white">Phone</h3>
                      <p className="text-sm text-gray-400">(203) 807-0250</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-base font-light text-white">Location</h3>
                      <p className="text-sm text-gray-400">Houston, TX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h2 className="text-xl font-light text-white mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 