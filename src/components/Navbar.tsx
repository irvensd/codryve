'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import GetStartedForm from './GetStartedForm';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'web' | 'saas' | 'mobile' | 'enterprise'>('web');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClick = (e: React.MouseEvent) => {
    if (pathname !== '/') {
      e.preventDefault();
      router.push('/#services');
    }
  };

  const handleGetStarted = () => {
    setIsFormOpen(true);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300">
              Codryve
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">
              Home
            </Link>
            <Link 
              href="/#services" 
              onClick={handleServicesClick}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-light"
            >
              Services
            </Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">
              Pricing
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">
              Contact
            </Link>
            <button 
              onClick={handleGetStarted}
              className="px-6 py-2 bg-white text-gray-900 rounded-md font-light hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <div className="w-6 h-6">
                  <FaTimes size={24} />
                </div>
              ) : (
                <div className="w-6 h-6">
                  <FaBars size={24} />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-gray-900/90 backdrop-blur-md rounded-lg mt-2">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                onClick={(e) => {
                  handleServicesClick(e);
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light py-2"
              >
                Services
              </Link>
              <Link
                href="/#pricing"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button 
                onClick={() => {
                  handleGetStarted();
                  setIsOpen(false);
                }}
                className="px-6 py-2 bg-white text-gray-900 rounded-md font-light hover:bg-gray-100 transition-colors duration-300 mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>

      <GetStartedForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType={selectedService}
      />
    </nav>
  );
};

export default Navbar; 