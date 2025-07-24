import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUpload, FiEdit, FiUsers, FiAward, FiCalendar } = FiIcons;

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate with Supabase
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-primary flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy-secondary p-8 rounded-lg shadow-2xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="text-gold text-4xl mx-auto mb-4" />
            <h1 className="text-2xl font-command text-dress font-bold">Admin Access</h1>
            <p className="text-silver mt-2">Authorized Personnel Only</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-silver text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-navy-accent border border-silver/20 rounded-lg text-dress focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter admin email"
              />
            </div>
            
            <div>
              <label className="block text-silver text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 bg-navy-accent border border-silver/20 rounded-lg text-dress focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gold text-navy-primary py-3 rounded-lg font-command font-semibold hover:bg-gold/90 transition-colors"
            >
              SECURE ACCESS
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'photos', label: 'Photos', icon: FiUpload },
    { id: 'testimonials', label: 'Testimonials', icon: FiUsers },
    { id: 'timeline', label: 'Timeline', icon: FiCalendar },
    { id: 'awards', label: 'Awards', icon: FiAward }
  ];

  return (
    <div className="min-h-screen bg-navy-primary">
      <div className="bg-navy-secondary border-b border-silver/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-command text-dress font-bold">Command Dashboard</h1>
          <p className="text-silver">Manage RDC Legacy Content</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-command font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gold text-navy-primary'
                  : 'bg-navy-secondary text-silver hover:bg-navy-accent'
              }`}
            >
              <SafeIcon icon={tab.icon} className="text-lg" />
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-navy-secondary rounded-lg p-6"
        >
          {activeTab === 'photos' && (
            <div>
              <h2 className="text-xl font-command text-dress font-bold mb-4">Photo Management</h2>
              <div className="border-2 border-dashed border-silver/30 rounded-lg p-8 text-center">
                <SafeIcon icon={FiUpload} className="text-4xl text-silver mx-auto mb-4" />
                <p className="text-silver mb-4">Upload division photos and gallery content</p>
                <button className="bg-gold text-navy-primary px-6 py-2 rounded-lg font-command font-semibold">
                  SELECT FILES
                </button>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div>
              <h2 className="text-xl font-command text-dress font-bold mb-4">Testimonial Management</h2>
              <div className="space-y-4">
                <div className="bg-navy-accent p-4 rounded-lg">
                  <p className="text-dress mb-2">"Chief King taught me discipline that saved my life."</p>
                  <p className="text-silver text-sm">- Petty Officer Smith, Division 901</p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-gold hover:text-gold/80">
                      <SafeIcon icon={FiEdit} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-xl font-command text-dress font-bold mb-4">Career Timeline</h2>
              <p className="text-silver">Manage career milestones and achievements</p>
            </div>
          )}

          {activeTab === 'awards' && (
            <div>
              <h2 className="text-xl font-command text-dress font-bold mb-4">Awards & Recognition</h2>
              <p className="text-silver">Update medals, ribbons, and commendations</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;