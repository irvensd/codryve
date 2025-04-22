'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-8 px-4">
              We&apos;d love to hear from you. Get in touch with us to discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 sm:py-3 bg-gray-700/50 border rounded-md text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    }`}
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 sm:py-3 bg-gray-700/50 border rounded-md text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base text-gray-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 sm:py-3 bg-gray-700/50 border rounded-md text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 ${
                      errors.subject ? 'border-red-500' : 'border-gray-600'
                    }`}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development</option>
                    <option value="saas-development">SaaS Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 sm:py-3 bg-gray-700/50 border rounded-md text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 ${
                      errors.message ? 'border-red-500' : 'border-gray-600'
                    }`}
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 bg-blue-400 text-gray-900 rounded-md font-light hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700/50">
                <h2 className="text-xl sm:text-2xl font-light text-white mb-6">Contact Information</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-base sm:text-lg font-light text-white">Email</h3>
                      <p className="text-sm sm:text-base text-gray-400">contact@codryve.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-base sm:text-lg font-light text-white">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-base sm:text-lg font-light text-white">Location</h3>
                      <p className="text-sm sm:text-base text-gray-400">New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700/50">
                <h2 className="text-xl sm:text-2xl font-light text-white mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact; 