import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiHome, FiUser, FiCamera, FiAward, FiHeart, FiMessageSquare } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Command', icon: FiHome },
    { id: 'timeline', label: 'Career', icon: FiUser },
    { id: 'gallery', label: 'Gallery', icon: FiCamera },
    { id: 'awards', label: 'Awards', icon: FiAward },
    { id: 'family', label: 'Family', icon: FiHeart },
    { id: 'messages', label: 'Messages', icon: FiMessageSquare }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-primary/95 backdrop-blur-sm border-b border-silver/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-gold font-command font-bold text-xl">
            RDC LEGACY
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dress hover:text-gold transition-colors"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-2xl" />
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-silver hover:text-gold transition-colors font-command font-medium"
              >
                <SafeIcon icon={item.icon} className="text-lg" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-40 bg-navy-secondary border-b border-silver/20 md:hidden"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 w-full text-left text-silver hover:text-gold transition-colors font-command font-medium py-2"
              >
                <SafeIcon icon={item.icon} className="text-lg" />
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;