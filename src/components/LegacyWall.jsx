import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiQuote, FiUser, FiSearch } = FiIcons;

const LegacyWall = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      quote: "Chief King taught me discipline that saved my life. His lessons went beyond the Navy - they shaped who I became as a man.",
      author: "Petty Officer Marcus Johnson",
      division: "Division 901",
      year: "2018",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "I was scared, homesick, and ready to quit. Chief King saw something in me I didn't see in myself. He never gave up on me.",
      author: "Seaman Sarah Martinez",
      division: "Division 915",
      year: "2019",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0a3?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The standards were high, but Chief King showed us how to reach them. He didn't just make us better Sailors - he made us better people.",
      author: "Petty Officer David Chen",
      division: "Division 923",
      year: "2020",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Chief King had this way of pushing you to your limits while making you believe you could do anything. That confidence stayed with me.",
      author: "Seaman Rebecca Thompson",
      division: "Division 908",
      year: "2019",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Years later, I still hear his voice when I face challenges. 'Attention to detail' wasn't just a phrase - it was a way of life.",
      author: "Petty Officer James Wilson",
      division: "Division 912",
      year: "2021",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "He saw potential in every recruit, even when we couldn't see it ourselves. That belief changed everything for me.",
      author: "Seaman Amanda Rodriguez",
      division: "Division 934",
      year: "2022",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="legacy" className="py-20 bg-navy-primary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            LEGACY WALL
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto mb-8">
            Voices of the Sailors he trained - testimonies from those whose lives 
            were transformed under his command.
          </p>
          
          {/* Impact Counter */}
          <div className="bg-navy-secondary p-6 rounded-lg border border-gold/30 max-w-md mx-auto">
            <div className="text-4xl font-command font-bold text-gold mb-2">1,200+</div>
            <div className="text-silver font-body">Sailors Forged</div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by division number or name..."
              className="w-full px-4 py-3 pl-12 bg-navy-secondary border border-silver/20 rounded-lg text-dress placeholder-silver/60 focus:outline-none focus:border-gold transition-colors"
            />
            <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-navy-secondary p-6 rounded-lg border border-silver/20 hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="relative mb-4">
                <SafeIcon icon={FiQuote} className="text-gold/30 text-4xl absolute -top-2 -left-2" />
                <p className="text-silver leading-relaxed italic pl-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <div className="text-dress font-command font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-gold text-sm">
                    {testimonial.division} • {testimonial.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-navy-secondary text-gold px-8 py-3 rounded-lg font-command font-medium border border-gold/30 hover:bg-gold hover:text-navy-primary transition-colors">
            LOAD MORE TESTIMONIALS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyWall;