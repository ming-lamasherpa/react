// src/pages/AboutUs.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import VisionMission from '../components/VisionMission';
import LeadershipTeam from '../components/LeadershipTeam';

const AboutUs = () => {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <VisionMission />
      <LeadershipTeam />
    </main>
  );
};

export default AboutUs;


