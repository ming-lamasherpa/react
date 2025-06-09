import React from 'react';
import headerimg from '../assets/book.jpg';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            We are <span className="text-yellow-300">Cogent Health</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            Cogent Health is one of the fastest-growing health-tech companies in Nepal, developing integrated health information systems that help hospitals enhance patient outcomes through digital innovation.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={headerimg}
            alt="Dashboard"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl ring-1 ring-white/20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


