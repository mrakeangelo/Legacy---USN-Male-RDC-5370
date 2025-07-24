import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiStar, FiAward, FiUsers, FiTrendingUp } = FiIcons;

const CareerTimeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timelineEvents = [
    {
      year: '2010',
      title: 'Enlisted in U.S. Navy',
      description: 'Began journey as Seaman Recruit, driven by purpose to serve',
      icon: FiAnchor,
      color: 'text-gold'
    },
    {
      year: '2014',
      title: 'Advanced to Petty Officer',
      description: 'Demonstrated leadership potential and technical expertise',
      icon: FiTrendingUp,
      color: 'text-silver'
    },
    {
      year: '2016',
      title: 'Made Chief Petty Officer',
      description: 'Achieved the sacred rank of Chief, joining the Goat Locker',
      icon: FiStar,
      color: 'text-gold'
    },
    {
      year: '2017',
      title: 'RDC School Graduate',
      description: 'Completed rigorous training to become Recruit Division Commander',
      icon: FiAward,
      color: 'text-silver'
    },
    {
      year: '2018',
      title: 'First Division Assignment',
      description: 'Division 901 - First group of recruits to transform into Sailors',
      icon: FiUsers,
      color: 'text-gold'
    },
    {
      year: '2022',
      title: 'RTC Excellence Award',
      description: 'Recognized for outstanding performance and recruit development',
      icon: FiAward,
      color: 'text-gold'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-navy-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            CAREER TIMELINE
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            From recruit to Chief Petty Officer to RDC - a journey of dedication, 
            leadership, and unwavering commitment to developing America's Sailors.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30 hidden md:block"></div>
          
          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                  <div className="bg-navy-accent p-6 rounded-lg border border-silver/20 hover:border-gold/50 transition-colors">
                    <div className="text-gold font-command font-bold text-2xl mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-command font-bold text-dress mb-3">
                      {event.title}
                    </h3>
                    <p className="text-silver leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-navy-primary border-4 border-gold rounded-full my-4 md:my-0">
                  <SafeIcon icon={event.icon} className={`text-2xl ${event.color}`} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;