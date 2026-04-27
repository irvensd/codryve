'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

interface GetStartedFormProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'web' | 'saas' | 'mobile' | 'marketing';
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ isOpen, onClose, serviceType: initialServiceType }) => {
  const [mounted, setMounted] = useState(false);
  const [fax, setFax] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalInfo: '',
    serviceType: initialServiceType,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Set initial service type
  useEffect(() => {
    setFormData(prev => ({ ...prev, serviceType: initialServiceType }));
  }, [initialServiceType]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, fax }),
        });

        let data: { error?: string } = {};
        try {
          data = (await response.json()) as { error?: string };
        } catch {
          data = {};
        }

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you! Your project request has been submitted successfully.',
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            company: '',
            projectDescription: '',
            budget: '',
            timeline: '',
            additionalInfo: '',
            serviceType: initialServiceType,
          });
          setFax('');
          // Close modal after 2 seconds
          setTimeout(() => {
            onClose();
            setSubmitStatus({ type: null, message: '' });
          }, 2000);
        } else {
          throw new Error(data.error || 'Failed to submit form');
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error 
          ? error.message 
          : 'Failed to submit form. Please try again.';
          
        setSubmitStatus({
          type: 'error',
          message: errorMessage,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  if (!isOpen || !mounted) return null;

  // Service type options for the dropdown
  const serviceOptions = [
    { value: 'web', label: 'Web Development' },
    { value: 'saas', label: 'SaaS Development' },
    { value: 'mobile', label: 'App Development' },
    { value: 'marketing', label: 'Digital Marketing' },
  ];

  const modalContent = (
    <div 
      className="fixed inset-0" 
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ position: 'fixed' }}
      />
      <div className="fixed inset-0 overflow-y-auto" style={{ position: 'fixed' }}>
        <div className="min-h-screen px-4 py-6 flex items-center justify-center">
          <div 
            className="bg-gray-900 rounded-lg w-full max-w-lg mx-auto p-5 sm:p-8 relative"
            style={{ zIndex: 999999 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Close form"
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center mb-5 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
                Get Started with a Project
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                Tell us about your project and we&apos;ll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-4 sm:space-y-6">
              <div
                className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="project-fax">Fax</label>
                <input
                  type="text"
                  id="project-fax"
                  name="fax"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fax}
                  onChange={(e) => setFax(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                    className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
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
                    className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-1">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
                  rows={3}
                  className={`w-full px-3 py-2 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ${
                    errors.projectDescription ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder={`Describe your project requirements...`}
                />
                {errors.projectDescription && <p className="mt-1 text-sm text-red-500">{errors.projectDescription}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
                  rows={2}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Any other details you'd like to share..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-red-500/10 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 bg-blue-500 text-white rounded-md font-light transition-all duration-300 ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-blue-600 active:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default GetStartedForm; 