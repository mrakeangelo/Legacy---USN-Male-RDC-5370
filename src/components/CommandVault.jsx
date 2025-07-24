import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiCalendar, FiFileText, FiClock } = FiIcons;

const CommandVault = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const timeCapsules = [
    {
      id: 1,
      title: 'Letter to Future RDCs',
      description: 'Wisdom and guidance for those who will carry the torch',
      unlockDate: '2024-01-15',
      isUnlocked: true,
      content: `To the RDCs who will follow in my footsteps:

Remember that every recruit who walks through those doors is someone's child, someone's hope for the future. They come to you scared, uncertain, but with a spark of something greater inside them.

Your job isn't just to teach them to march or make their racks. Your job is to help them discover the Sailor within themselves. Some will fight you, some will surprise you, but all of them deserve your best effort.

The red rope you wear isn't just a symbol of authority - it's a symbol of trust. Trust that you'll guide them safely through their transformation. Trust that you'll see potential where others see problems.

Be firm but fair. Be demanding but supportive. Be the leader they need, not the one that's easiest to be.

The fleet is counting on you. The nation is counting on you. But most importantly, those recruits are counting on you.

Make us proud.

Chief Raymond J. King`
    },
    {
      id: 2,
      title: 'Reflections on Leadership',
      description: 'Personal thoughts on what it means to lead',
      unlockDate: '2024-06-15',
      isUnlocked: false,
      content: 'This message will be unlocked on June 15, 2024'
    },
    {
      id: 3,
      title: 'Message to Division 901',
      description: 'Special words for his first division',
      unlockDate: '2024-12-15',
      isUnlocked: false,
      content: 'This message will be unlocked on December 15, 2024'
    },
    {
      id: 4,
      title: 'Final Thoughts',
      description: 'A reflection on a career dedicated to service',
      unlockDate: '2025-01-01',
      isUnlocked: false,
      content: 'This message will be unlocked on January 1, 2025'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openCapsule = (capsule) => {
    if (capsule.isUnlocked) {
      setSelectedCapsule(capsule);
    }
  };

  return (
    <section id="vault" className="py-20 bg-navy-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            COMMAND VAULT
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Time capsules containing letters, reflections, and wisdom from Chief King. 
            Some messages are available now, others will unlock on specific dates, 
            continuing his legacy into the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {timeCapsules.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-navy-secondary p-6 rounded-lg border transition-all duration-300 cursor-pointer ${
                capsule.isUnlocked
                  ? 'border-gold/50 hover:border-gold hover:shadow-lg hover:shadow-gold/20'
                  : 'border-silver/20 hover:border-silver/40'
              }`}
              onClick={() => openCapsule(capsule)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  capsule.isUnlocked ? 'bg-gold/10' : 'bg-silver/10'
                }`}>
                  <SafeIcon 
                    icon={capsule.isUnlocked ? FiUnlock : FiLock} 
                    className={`text-xl ${capsule.isUnlocked ? 'text-gold' : 'text-silver'}`} 
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-command font-bold text-dress mb-2">
                    {capsule.title}
                  </h3>
                  <p className="text-silver text-sm mb-4 leading-relaxed">
                    {capsule.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <SafeIcon icon={FiCalendar} className="text-silver/60" />
                      <span className="text-silver/60">
                        {capsule.isUnlocked ? 'Unlocked' : `Unlocks ${formatDate(capsule.unlockDate)}`}
                      </span>
                    </div>
                    
                    {capsule.isUnlocked && (
                      <div className="flex items-center gap-2">
                        <SafeIcon icon={FiFileText} className="text-gold" />
                        <span className="text-gold font-command font-medium">
                          READ NOW
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Modal */}
        {selectedCapsule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedCapsule(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-navy-secondary rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto border border-gold/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-silver/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-command font-bold text-dress">
                    {selectedCapsule.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCapsule(null)}
                    className="text-silver hover:text-gold transition-colors"
                  >
                    <SafeIcon icon={FiFileText} className="text-2xl" />
                  </button>
                </div>
                <p className="text-silver mt-2">
                  {selectedCapsule.description}
                </p>
              </div>
              
              <div className="p-6">
                <div className="prose prose-invert max-w-none">
                  <div className="text-silver leading-relaxed whitespace-pre-line">
                    {selectedCapsule.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CommandVault;