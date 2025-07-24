import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiShield, FiTarget } = FiIcons;

const AwardsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const awards = [
    {
      name: 'Navy Achievement Medal',
      description: 'For professional achievement in the superior performance of duties',
      icon: FiAward,
      year: '2019'
    },
    {
      name: 'Navy Commendation Medal',
      description: 'For meritorious service as Recruit Division Commander',
      icon: FiStar,
      year: '2021'
    },
    {
      name: 'Good Conduct Medal',
      description: 'For exemplary behavior, efficiency, and fidelity',
      icon: FiShield,
      year: '2020'
    },
    {
      name: 'RTC Excellence Award',
      description: 'Outstanding performance in recruit training and development',
      icon: FiTarget,
      year: '2022'
    }
  ];

  const rankProgression = [
    { rank: 'SR', name: 'Seaman Recruit', year: '2010' },
    { rank: 'SA', name: 'Seaman Apprentice', year: '2011' },
    { rank: 'SN', name: 'Seaman', year: '2012' },
    { rank: 'PO3', name: 'Petty Officer 3rd Class', year: '2013' },
    { rank: 'PO2', name: 'Petty Officer 2nd Class', year: '2014' },
    { rank: 'PO1', name: 'Petty Officer 1st Class', year: '2015' },
    { rank: 'CPO', name: 'Chief Petty Officer', year: '2016' }
  ];

  return (
    <section id="awards" className="py-20 bg-navy-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            AWARDS & RECOGNITION
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Recognition for excellence in leadership, training, and unwavering commitment 
            to developing America's future Sailors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-command font-bold text-dress mb-8 text-center">
              MEDALS & COMMENDATIONS
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-navy-primary p-6 rounded-lg border border-silver/20 hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <SafeIcon icon={award.icon} className="text-gold text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-dress font-command font-bold">
                          {award.name}
                        </h4>
                        <span className="text-gold text-sm font-command">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-silver text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rank Progression */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-command font-bold text-dress mb-8 text-center">
              RANK PROGRESSION
            </h3>
            <div className="space-y-4">
              {rankProgression.map((rank, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 bg-navy-primary p-4 rounded-lg border border-silver/20">
                    <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center">
                      <span className="text-gold font-command font-bold text-sm">
                        {rank.rank}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-dress font-command font-medium">
                        {rank.name}
                      </div>
                      <div className="text-silver text-sm">
                        {rank.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rank Progression Line */}
                  {index < rankProgression.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-4 bg-gold/30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RDC Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-navy-primary p-8 rounded-lg border border-gold/30">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-3 h-8 bg-red-600 rounded"></div>
              <h3 className="text-2xl font-command font-bold text-dress">
                RDC RED ROPE
              </h3>
              <div className="w-3 h-8 bg-red-600 rounded"></div>
            </div>
            <p className="text-silver max-w-2xl mx-auto">
              The red rope signifies the sacred trust placed in Recruit Division Commanders - 
              the responsibility to transform civilians into United States Sailors with honor, 
              courage, and commitment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;