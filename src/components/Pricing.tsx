'use client';

import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import GetStartedForm from './GetStartedForm';

const pricingPlans = [
  {
    name: 'Web Development',
    price: '$1,500',
    period: '/project',
    description: 'Perfect for small to medium websites',
    features: [
      'Custom website development',
      'Responsive design',
      '1 month of support',
      'Basic SEO optimization',
      'Contact form integration',
      'Performance optimization',
      'Content management system'
    ],
    popular: false,
    note: 'Starting price',
    type: 'web'
  },
  {
    name: 'SaaS Development',
    price: '$7,500',
    period: '/project',
    description: 'Ideal for software as a service solutions',
    features: [
      'Custom backend development',
      'User authentication system',
      'Payment integration',
      'API development',
      '3 months of support',
      'Database setup',
      'Cloud deployment',
      'Analytics integration'
    ],
    popular: true,
    note: 'Starting price',
    type: 'saas'
  },
  {
    name: 'Enterprise',
    price: '$15,000',
    period: '/project',
    description: 'For large-scale custom solutions',
    features: [
      'Mobile Development',
      'Full-stack development',
      'Custom UI/UX design',
      '6 months of support',
      'Advanced security features',
      'Scalable architecture',
      'API documentation',
      'Database optimization',
      'Team training'
    ],
    popular: false,
    note: 'Starting price',
    type: 'enterprise'
  }
];

const Pricing: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'web' | 'saas' | 'mobile' | 'enterprise'>('web');

  const handleGetStarted = (serviceType: 'web' | 'saas' | 'mobile' | 'enterprise') => {
    setSelectedService(serviceType);
    setIsFormOpen(true);
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Simple <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Choose the perfect plan for your project. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full p-6 sm:p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm border ${
                plan.popular 
                  ? 'border-blue-400/50' 
                  : 'border-gray-700/50'
              } hover:border-blue-400/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-400/20 text-blue-400 text-xs font-light px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-light text-white">{plan.price}</span>
                  <span className="text-sm sm:text-base text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mt-2">{plan.description}</p>
                <p className="text-sm text-blue-400 mt-2">{plan.note}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm sm:text-base text-gray-300">
                    <FaCheck className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted(plan.type as 'web' | 'saas' | 'mobile' | 'enterprise')}
                className={`w-full py-2 sm:py-3 rounded-md font-light transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-blue-400 text-gray-900 hover:bg-blue-500'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      <GetStartedForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType={selectedService}
      />
    </section>
  );
};

export default Pricing; 