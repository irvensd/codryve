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
      'Content management system',
      'Google Analytics setup',
      'Social media integration'
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
      'Analytics integration',
      'Automated testing',
      'CI/CD pipeline setup'
    ],
    popular: true,
    note: 'Starting price',
    type: 'saas'
  },
  {
    name: 'Mobile App Development',
    price: '$15,000',
    period: '/project',
    description: 'For native and cross-platform mobile apps',
    features: [
      'iOS & Android development',
      'Custom UI/UX design',
      '6 months of support',
      'Advanced security features',
      'App Store submissions',
      'API integration',
      'Push notifications',
      'User authentication',
      'Analytics integration',
      'Performance optimization'
    ],
    popular: false,
    note: 'Starting price',
    type: 'mobile'
  }
];

// Additional service plans that can be offered separately or as add-ons
const additionalServices = [
  {
    name: 'E-commerce Solutions',
    price: '$5,000',
    period: '/project',
    features: [
      'Custom e-commerce platform',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking system',
      'Customer portal',
      'Product catalog',
      'Shopping cart functionality',
      'Admin dashboard'
    ],
    type: 'web'
  },
  {
    name: 'Digital Marketing',
    price: '$2,500',
    period: '/month',
    features: [
      'SEO optimization',
      'Content marketing',
      'Social media management',
      'Email marketing',
      'PPC campaigns',
      'Analytics & reporting',
      'Conversion optimization',
      'Brand strategy'
    ],
    type: 'marketing'
  }
];

const Pricing: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'web' | 'saas' | 'mobile' | 'marketing'>('web');
  const [activeTab, setActiveTab] = useState('main');

  const handleGetStarted = (serviceType: 'web' | 'saas' | 'mobile' | 'marketing') => {
    setSelectedService(serviceType);
    setIsFormOpen(true);
  };

  return (
    <section id="pricing" className="relative py-12 md:py-24 bg-gray-900" style={{ zIndex: 1 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Simple <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Choose the perfect plan for your project. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-gray-800/50 p-1">
            <button
              onClick={() => setActiveTab('main')}
              className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                activeTab === 'main'
                  ? 'bg-blue-400 text-gray-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Main Services
            </button>
            <button
              onClick={() => setActiveTab('additional')}
              className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                activeTab === 'additional'
                  ? 'bg-blue-400 text-gray-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Additional Services
            </button>
          </div>
        </div>

        {activeTab === 'main' ? (
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
                  onClick={() => handleGetStarted(plan.type as 'web' | 'saas' | 'mobile' | 'marketing')}
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col h-full p-6 sm:p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2">{service.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-light text-white">{service.price}</span>
                    <span className="text-sm sm:text-base text-gray-400 ml-2">{service.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm sm:text-base text-gray-300">
                      <FaCheck className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleGetStarted(service.type as 'web' | 'saas' | 'mobile' | 'marketing')}
                  className="w-full py-2 sm:py-3 bg-gray-700 text-white rounded-md font-light hover:bg-gray-600 transition-colors duration-300"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        )}
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