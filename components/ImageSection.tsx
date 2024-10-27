// components/ImageSection.tsx
import React from 'react';

const ImageSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div>
            <img
              src="images/image1.jpg"
              alt="Fresh Greens"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Image */}
          <div>
            <img
              src="images/image2.jpg"
              alt="Vegetables with Bread"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
           
          {/* 3rd Image */}
          <div>
            <img
              src="images/image3.jpg"
              alt="Vegetables with Bread"
              className="w-full h-auto rounded-lg shadow-md object-cover"
              />
               <p className="mt-4 text-gray-700">
              Enjoy a delightful combination of fresh vegetables and bread,
              perfect for a healthy meal.
            </p>
            
          </div>











        </div>
       </div>
    </section>
  );
};

export default ImageSection;
