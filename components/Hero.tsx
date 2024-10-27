// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          We're <em className="italic text-green-700">farmers, purveyors,</em> and <em className="italic text-green-700">eaters</em> of organically grown food.
        </h1>
        
        {/* Button */}
        <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300">
          Browse our shop
        </button>
      </div>
    </section>
  );
};

export default Hero;
