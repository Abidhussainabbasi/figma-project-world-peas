// components/WhoWeAre.tsx
import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          We are a team of passionate individuals dedicated to providing the best services and products
          for our customers. Our mission is to deliver quality and innovation in every aspect of our work.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-around items-center">
          <div className="max-w-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To enhance lives through our products and services while maintaining integrity and respect.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the leading provider in our industry and a trusted partner for our clients.
            </p>
          </div>
          <div className="max-w-sm text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-2 text-gray-600">
              Quality, Innovation, Customer Satisfaction, and Teamwork are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
