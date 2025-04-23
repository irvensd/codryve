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

  const handleServicesClick = () => {
    if (pathname !== '/') {
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
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <div className="flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300">
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
              className="p-2 -mr-2 text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-0">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 font-light"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => {
                handleServicesClick();
                setIsOpen(false);
              }}
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 font-light"
            >
              Services
            </Link>
            <Link
              href="/#pricing"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 font-light"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/portfolio"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 font-light"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-300 font-light"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 py-3">
              <button 
                onClick={() => {
                  handleGetStarted();
                  setIsOpen(false);
                }}
                className="w-full px-6 py-2.5 bg-white text-gray-900 rounded-md font-light hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <GetStartedForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType="web"
      />
    </nav>
  );
};

export default Navbar; 