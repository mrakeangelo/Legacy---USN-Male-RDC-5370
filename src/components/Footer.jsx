import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiChevronRight, FiChevronLeft } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "A division is only as good as its RDC.",
    "Every great Sailor started at attention.",
    "Leadership is not about being in charge. It's about taking care of those in your charge.",
    "The uniform doesn't make the Sailor. The Sailor makes the uniform.",
    "Discipline is the bridge between goals and accomplishment."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <footer className="bg-navy-secondary border-t border-silver/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Quote Carousel */}
        <div className="text-center mb-12">
          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={prevQuote}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-silver hover:text-gold transition-colors"
            >
              <SafeIcon icon={FiChevronLeft} className="text-2xl" />
            </button>
            
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-12"
            >
              <blockquote className="text-2xl md:text-3xl font-body text-silver italic leading-relaxed">
                "{quotes[currentQuote]}"
              </blockquote>
            </motion.div>
            
            <button
              onClick={nextQuote}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-silver hover:text-gold transition-colors"
            >
              <SafeIcon icon={FiChevronRight} className="text-2xl" />
            </button>
          </div>
          
          {/* Quote Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentQuote ? 'bg-gold' : 'bg-silver/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navy Emblem */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-4">
            <SafeIcon icon={FiAnchor} className="text-gold text-3xl" />
          </div>
          <h3 className="text-xl font-command font-bold text-dress mb-2">
            UNITED STATES NAVY
          </h3>
          <p className="text-silver">
            Honor • Courage • Commitment
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="text-dress font-command font-bold mb-4">LEGACY</h4>
            <ul className="space-y-2 text-silver">
              <li><a href="#timeline" className="hover:text-gold transition-colors">Career Timeline</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Photo Archive</a></li>
              <li><a href="#awards" className="hover:text-gold transition-colors">Awards & Recognition</a></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h4 className="text-dress font-command font-bold mb-4">COMMUNITY</h4>
            <ul className="space-y-2 text-silver">
              <li><a href="#legacy" className="hover:text-gold transition-colors">Sailor Testimonials</a></li>
              <li><a href="#messages" className="hover:text-gold transition-colors">Message Wall</a></li>
              <li><a href="#vault" className="hover:text-gold transition-colors">Command Vault</a></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h4 className="text-dress font-command font-bold mb-4">CONNECT</h4>
            <ul className="space-y-2 text-silver">
              <li><a href="#family" className="hover:text-gold transition-colors">Family Stories</a></li>
              <li><a href="/admin" className="hover:text-gold transition-colors">Admin Access</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-silver/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-silver text-sm">
              © 2024 Chief Raymond J. King Legacy. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-silver text-sm">
              <span>Designed with honor by</span>
              <a href="#" className="text-gold hover:text-gold/80 transition-colors font-command font-medium">
                Mrake Agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;