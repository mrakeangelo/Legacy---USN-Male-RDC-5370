import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiPause, FiVolumeX, FiVolume2 } = FiIcons;

const MakingOfSailor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="making" className="py-20 bg-navy-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            THE MAKING OF A SAILOR
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            In his own words: Why he became an RDC and what it meant to transform 
            civilians into United States Sailors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Audio/Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-navy-secondary rounded-lg p-8 border border-silver/20">
              <div className="aspect-video bg-navy-accent rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
                <div className="relative z-10">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center hover:bg-gold transition-colors group"
                  >
                    <SafeIcon 
                      icon={isPlaying ? FiPause : FiPlay} 
                      className="text-navy-primary text-2xl group-hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                  <span className="text-silver font-command">VOICE NARRATIVE</span>
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-silver hover:text-gold transition-colors"
                >
                  <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="text-xl" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Journal-style Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-navy-secondary p-6 rounded-lg border border-silver/20">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-command font-bold text-dress mb-4">
                  "Why I Became an RDC"
                </h3>
                <p className="text-silver leading-relaxed mb-4">
                  I didn't choose to be an RDC just to yell at recruits. I chose this path 
                  because I believe in the transformation that happens here at RTC. Every 
                  young person who walks through these doors has potential - my job is to 
                  unlock it.
                </p>
                <p className="text-silver leading-relaxed">
                  When I see a recruit who's struggling, I see myself at 18. When I see 
                  them graduate, I see the future of our Navy. That's what drives me every 
                  single day.
                </p>
              </div>
            </div>

            <div className="bg-navy-secondary p-6 rounded-lg border border-silver/20">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-command font-bold text-dress mb-4">
                  "The Sacred Trust"
                </h3>
                <p className="text-silver leading-relaxed">
                  Parents send us their children. America sends us its future defenders. 
                  That's not a responsibility I take lightly. Every decision I make, every 
                  word I speak, shapes not just a Sailor, but a life.
                </p>
              </div>
            </div>

            <div className="bg-navy-secondary p-6 rounded-lg border border-silver/20">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl font-command font-bold text-dress mb-4">
                  "The Moment They Get It"
                </h3>
                <p className="text-silver leading-relaxed">
                  There's a moment - different for every recruit - when they stop being 
                  civilians and start being Sailors. You can see it in their eyes, in how 
                  they carry themselves. That moment makes every early morning, every long 
                  day, every challenge worth it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MakingOfSailor;