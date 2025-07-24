import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiPlay, FiPause, FiHome, FiClock } = FiIcons;

const FamilySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const familyMoments = [
    {
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop',
      caption: 'Family support during long training cycles'
    },
    {
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop',
      caption: 'Home moments between divisions'
    },
    {
      image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=400&h=300&fit=crop',
      caption: 'Family at graduation ceremony'
    }
  ];

  return (
    <section id="family" className="py-20 bg-navy-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            FAMILY & LIFE BEYOND COMMAND
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Behind every great RDC is a family that supports the mission. The long hours, 
            early mornings, and dedication to training recruits requires sacrifice from 
            those who love him most.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Family Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-navy-secondary p-6 rounded-lg border border-silver/20">
              <div className="flex items-center gap-3 mb-4">
                <SafeIcon icon={FiHeart} className="text-gold text-xl" />
                <h3 className="text-xl font-command font-bold text-dress">
                  The Support System
                </h3>
              </div>
              <p className="text-silver leading-relaxed mb-4">
                "Being an RDC wife means understanding that your husband's mission 
                extends beyond your family to every young person who walks through 
                those doors. It means late dinners, missed holidays, and knowing 
                that he's giving his all to shape the future of our Navy."
              </p>
              <p className="text-silver leading-relaxed">
                The family knew that every recruit who graduated successfully was 
                a victory not just for Chief King, but for everyone who supported 
                his dedication to the mission.
              </p>
            </div>

            <div className="bg-navy-secondary p-6 rounded-lg border border-silver/20">
              <div className="flex items-center gap-3 mb-4">
                <SafeIcon icon={FiClock} className="text-gold text-xl" />
                <h3 className="text-xl font-command font-bold text-dress">
                  Time and Sacrifice
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-command font-bold text-gold mb-1">0500</div>
                  <div className="text-silver text-sm">Daily Start Time</div>
                </div>
                <div>
                  <div className="text-2xl font-command font-bold text-gold mb-1">14+</div>
                  <div className="text-silver text-sm">Hour Days</div>
                </div>
                <div>
                  <div className="text-2xl font-command font-bold text-gold mb-1">8</div>
                  <div className="text-silver text-sm">Week Cycles</div>
                </div>
                <div>
                  <div className="text-2xl font-command font-bold text-gold mb-1">24/7</div>
                  <div className="text-silver text-sm">Commitment</div>
                </div>
              </div>
            </div>

            {/* Audio Message */}
            <div className="bg-navy-secondary p-6 rounded-lg border border-silver/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-command font-bold text-dress">
                  Family Message
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                >
                  <SafeIcon 
                    icon={isPlaying ? FiPause : FiPlay} 
                    className="text-gold text-lg"
                  />
                </button>
              </div>
              <p className="text-silver text-sm italic">
                "A personal message from the family about Chief King's dedication 
                and the pride they feel in his service to our nation's future Sailors."
              </p>
            </div>
          </motion.div>

          {/* Family Photos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {familyMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={moment.image}
                  alt={moment.caption}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-dress font-command font-medium text-sm">
                    {moment.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Family Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-navy-secondary p-8 rounded-lg border border-gold/30 max-w-4xl mx-auto">
            <SafeIcon icon={FiHome} className="text-gold text-4xl mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-body text-silver italic leading-relaxed mb-4">
              "We're proud of the man he is, the leader he's become, and the 
              difference he's made in so many lives. Every Sailor he's trained 
              is part of our extended family."
            </blockquote>
            <p className="text-gold font-command font-medium">
              - The King Family
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilySection;