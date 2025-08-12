
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/background_about.webp')" }} // Placeholder
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Quality Cleaning Services
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Professional and reliable cleaning for your home and office.
        </p>
        <button className="bg-blue-500 text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-blue-600 transition-colors">
          Get a Free Estimate
        </button>
      </div>
    </section>
  );
};

export default Hero;
    