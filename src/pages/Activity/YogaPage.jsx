import React from 'react';

const YogaPage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/64626414faa5fa0ca5e1deae/e79e0f4f-0325-48f7-863b-033e3a2efcc9/home-yoga.jpg')" }}>
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 min-h-screen p-8">
        {/* Title */}
        <h1 className="text-5xl font-bold underline text-center mb-8 text-white">
          Yoga & Meditation
        </h1>

        {/* Content */}
        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-800 mb-4 leading-relaxed">
            A yoga and meditation service offered at a hotel provides guests with a serene environment to relax, rejuvenate, and improve their mental and physical well-being. Expert instructors guide guests through calming yoga sessions and mindfulness meditation practices, tailored for all experience levels. These services are typically held in tranquil settings, such as dedicated wellness rooms, scenic gardens, or beachside locations, creating an immersive experience that promotes stress relief, balance, and inner peace. Whether guests are seeking to start their day with energy or wind down in the evening, these sessions offer a perfect retreat from daily stresses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YogaPage;
