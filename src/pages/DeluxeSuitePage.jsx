import React from 'react';
import image1 from '../assets/Deluxesuite/image1.jpg'; 

const DeluxeSuitePage = () => {
  return (
    <div className="p-6">
      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column (Title, Image, and Paragraph) */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Deluxe Suite</h1>
          
          {/* Image Section */}
          <div className="mb-6">
            <img 
              src={image1} 
              alt="Deluxe Suite" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <p className="text-lg">
            The Deluxe Suite at our seaside hotel offers a luxurious escape with stunning ocean views and premium amenities designed for ultimate comfort. This spacious suite features a stylish, modern decor and comes equipped with free Wi-Fi, allowing you to stay connected effortlessly. Enjoy the convenience of an air conditioner to maintain the perfect temperature, and a refreshing shower to unwind after a day at the beach. The suite includes a well-stocked minibar, ensuring your favorite beverages are always within reach. For added security, a personal safety locker is provided to keep your valuables secure. Start your day right with a complimentary breakfast, featuring a variety of delicious options. Fresh towels are provided daily, and our dedicated cleaning service ensures the suite remains spotless throughout your stay.
          </p>
        </div>

        {/* Right Column (Empty) */}
        <div></div>
        
      </div>
    </div>
  );
};

export default DeluxeSuitePage;
