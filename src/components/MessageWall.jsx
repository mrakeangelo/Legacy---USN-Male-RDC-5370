import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageSquare, FiSend, FiUser, FiHeart, FiFlag } = FiIcons;

const MessageWall = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [newMessage, setNewMessage] = useState({
    name: '',
    relationship: '',
    message: ''
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Admiral Sarah Johnson',
      relationship: 'Former Commanding Officer',
      message: 'Chief King exemplified everything we expect from our RDCs. His dedication to developing Sailors was unmatched.',
      timestamp: '2 days ago',
      likes: 24
    },
    {
      id: 2,
      name: 'Master Chief Rodriguez',
      relationship: 'Fellow RDC',
      message: 'Worked alongside Chief King for 3 years. Never met anyone more committed to the mission. His recruits were always the best prepared.',
      timestamp: '1 week ago',
      likes: 18
    },
    {
      id: 3,
      name: 'Mrs. Patricia King',
      relationship: 'Mother',
      message: 'So proud of my son and the man he became. Every family should be blessed with someone who serves with such honor.',
      timestamp: '2 weeks ago',
      likes: 45
    },
    {
      id: 4,
      name: 'Petty Officer Williams',
      relationship: 'Former Recruit',
      message: 'Chief King changed my life. 10 years later, I still carry his lessons with me every day. Thank you, Chief.',
      timestamp: '3 weeks ago',
      likes: 32
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        relationship: newMessage.relationship,
        message: newMessage.message,
        timestamp: 'Just now',
        likes: 0
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', relationship: '', message: '' });
    }
  };

  return (
    <section id="messages" className="py-20 bg-navy-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-command font-bold text-dress mb-4">
            MESSAGE WALL
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-silver max-w-3xl mx-auto">
            Leave a tribute, share a memory, or simply say thank you. 
            This wall stands as a testament to the lives he touched and the legacy he built.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-navy-primary p-6 rounded-lg border border-silver/20 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <SafeIcon icon={FiMessageSquare} className="text-gold text-xl" />
                <h3 className="text-xl font-command font-bold text-dress">
                  Leave a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-silver text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={newMessage.name}
                    onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                    className="w-full px-4 py-3 bg-navy-secondary border border-silver/20 rounded-lg text-dress focus:outline-none focus:border-gold transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-silver text-sm font-medium mb-2">
                    Relationship
                  </label>
                  <input
                    type="text"
                    value={newMessage.relationship}
                    onChange={(e) => setNewMessage({...newMessage, relationship: e.target.value})}
                    className="w-full px-4 py-3 bg-navy-secondary border border-silver/20 rounded-lg text-dress focus:outline-none focus:border-gold transition-colors"
                    placeholder="Former recruit, colleague, family..."
                  />
                </div>
                
                <div>
                  <label className="block text-silver text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={newMessage.message}
                    onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-navy-secondary border border-silver/20 rounded-lg text-dress focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Share your thoughts, memories, or gratitude..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold text-navy-primary py-3 rounded-lg font-command font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  <SafeIcon icon={FiSend} />
                  POST MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-navy-primary p-6 rounded-lg border border-silver/20 hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={FiUser} className="text-gold text-lg" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-dress font-command font-medium">
                          {message.name}
                        </h4>
                        {message.relationship && (
                          <>
                            <span className="text-silver/60">•</span>
                            <span className="text-silver text-sm">
                              {message.relationship}
                            </span>
                          </>
                        )}
                      </div>
                      
                      <p className="text-silver leading-relaxed mb-4">
                        {message.message}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-silver/60">
                        <span>{message.timestamp}</span>
                        <button className="flex items-center gap-1 hover:text-gold transition-colors">
                          <SafeIcon icon={FiHeart} />
                          {message.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="text-gold hover:text-gold/80 font-command font-medium transition-colors">
                LOAD MORE MESSAGES
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MessageWall;