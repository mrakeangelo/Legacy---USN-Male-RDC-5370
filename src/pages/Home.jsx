import React from 'react';
import HeroSection from '../components/HeroSection';
import CareerTimeline from '../components/CareerTimeline';
import MakingOfSailor from '../components/MakingOfSailor';
import PhotoGallery from '../components/PhotoGallery';
import LegacyWall from '../components/LegacyWall';
import AwardsSection from '../components/AwardsSection';
import FamilySection from '../components/FamilySection';
import MessageWall from '../components/MessageWall';
import CommandVault from '../components/CommandVault';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="min-h-screen bg-navy-primary">
      <Navigation />
      <HeroSection />
      <CareerTimeline />
      <MakingOfSailor />
      <PhotoGallery />
      <LegacyWall />
      <AwardsSection />
      <FamilySection />
      <MessageWall />
      <CommandVault />
      <Footer />
    </div>
  );
};

export default Home;