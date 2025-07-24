import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiStar } = FiIcons;

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-accent"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Rank Insignia */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-navy-accent/50 px-6 py-3 rounded-full border border-gold/30">
              <SafeIcon icon={FiStar} className="text-gold text-xl" />
              <span className="text-gold font-command font-bold text-lg">CHIEF PETTY OFFICER</span>
              <SafeIcon icon={FiStar} className="text-gold text-xl" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-command font-bold text-dress mb-4 tracking-wide">
            RAYMOND J. KING
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-command text-gold mb-8 tracking-widest">
            U.S. NAVY RECRUIT DIVISION COMMANDER
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          {/* Hero Quote */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-gold/20 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl font-body text-silver italic leading-relaxed">
              You don't just lead. You shape futures.
            </blockquote>
            <div className="absolute -bottom-8 -right-4 text-6xl text-gold/20 font-serif">"</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-command font-bold text-gold mb-2">1,200+</div>
              <div className="text-silver font-body">Sailors Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-command font-bold text-gold mb-2">24</div>
              <div className="text-silver font-body">Divisions Led</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-command font-bold text-gold mb-2">8</div>
              <div className="text-silver font-body">Years of Service</div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gold text-navy-primary px-8 py-4 rounded-lg font-command font-bold text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105"
          >
            ENTER HIS COMMAND LEGACY
            <SafeIcon icon={FiChevronDown} className="ml-2 inline-block group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <SafeIcon icon={FiChevronDown} className="text-gold text-2xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;