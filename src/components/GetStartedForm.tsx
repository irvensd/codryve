'use client';

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface GetStartedFormProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'web' | 'marketing' | 'enterprise';
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ isOpen, onClose, serviceType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalInfo: '',
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
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', { ...formData, serviceType });
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectDescription: '',
        budget: '',
        timeline: '',
        additionalInfo: '',
      });
      setErrors({});
      onClose();
    } else {
      setErrors(newErrors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaTimes size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-white mb-2">
            Get Started with {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Development
          </h2>
          <p className="text-gray-400">
            Tell us about your project and we&apos;ll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-1">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                errors.projectDescription ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder={`Describe your ${serviceType} project requirements...`}
            />
            {errors.projectDescription && <p className="mt-1 text-sm text-red-500">{errors.projectDescription}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="">Select budget range</option>
                <option value="1k-5k">$1,000 - $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-30k">$15,000 - $30,000</option>
                <option value="30k+">$30,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="">Select timeline</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6months+">6+ months</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-1">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Any other details you'd like to share..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 font-light"
          >
            Submit Project Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm; 