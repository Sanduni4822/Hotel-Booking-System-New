import React, { useState, useEffect } from 'react';
import cookingImg from '../../assets/Activities/cooking.jpg';
import divingImg from '../../assets/Activities/diving.jpeg';
import fortTourImg from '../../assets/Activities/fortTour.jpg';
import yoga2Img from '../../assets/Activities/yoga2.jpg';
import image1Img from '../../assets/Activities/image1.jpg';
import image2Img from '../../assets/Activities/image2.jpg';
import image3Img from '../../assets/Activities/image3.jpg';
import image4Img from '../../assets/Activities/image4.jpg';
import image5Img from '../../assets/Activities/image5.jpg';

const ActivityPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [fortTourImg, image1Img, image2Img, image3Img, image4Img, image5Img, yoga2Img, divingImg, cookingImg];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-green-500 p-4">
        <h1 className="text-white text-5xl font-bold text-center">Activities</h1>
      </div>

      {/* Main Content Section */}
      <div className="relative w-full max-w-6xl h-[500px] rounded-lg overflow-hidden shadow-lg flex mt-4">
        {/* Image Section */}
        <div
          className="w-2/3 h-full bg-cover bg-center transition-transform duration-700"
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        ></div>

        {/* Text Boxes Section */}
        <div className="w-1/3 h-full p-4 bg-white flex flex-col justify-around space-y-2">
          <a
            href="/beach"
            className="bg-gray-100 p-2 rounded-lg shadow-md hover:bg-blue-200 transition"
            style={{ height: '120px' }} // Set desired height
          >
            <h2 className="text-xl font-semibold text-center font-bold">Beach & Water Activities</h2>
            <p>
              "Experience the thrill of adventure and relaxation with exciting beach activities!"
            </p>
          </a>

          <a
            href="/explorations"
            className="bg-gray-100 p-2 rounded-lg shadow-md hover:bg-blue-200 transition"
            style={{ height: '120px' }} // Set desired height
          >
            <h2 className="text-xl font-semibold text-center font-bold">Exploration & Nature Activities</h2>
            <p>
              "Discover the thrill of adventure & the beauty of nature through exploration & outdoor activities!"
            </p>
          </a>

          <a
            href="/yoga"
            className="bg-gray-100 p-2 rounded-lg shadow-md hover:bg-blue-200 transition"
            style={{ height: '120px' }} // Set desired height
          >
            <h2 className="text-xl font-semibold text-center font-bold">Yoga & Meditation</h2>
            <p>
              "Discover balance and inner peace through Yoga and Meditation, nurturing both body and mind."
            </p>
          </a>

          <a
            href="/other"
            className="bg-gray-100 p-2 rounded-lg shadow-md hover:bg-blue-200 transition"
            style={{ height: '120px' }} // Set desired height
          >
            <h2 className="text-xl font-semibold text-center font-bold">Other Activities</h2>
            <p>
              "Discover other exciting activities and create unforgettable memories."
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
