import React from 'react';

const SpaPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center py-8" 
      style={{ backgroundImage: 'url("https://d3eklcfi2wom17.cloudfront.net/2018/09/Spa-g1.jpg")' }}
    >
      <div className="bg-white bg-opacity-80 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-extrabold text-center text-teal-700 mb-6">
            Wellness Spa & Retreat
          </h1>

          <p className="text-center text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Escape to serenity with our luxurious spa services, designed to rejuvenate your mind, body, and soul. Our expert therapists provide a personalized wellness experience, whether you seek relaxation or revitalization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Full Body Massage',
                description: 'A relaxing 60-minute massage designed to ease muscle tension and promote overall relaxation.',
                price: '$80'
              },
              {
                title: 'Facial Treatment',
                description: 'Rejuvenate your skin with a hydrating and refreshing facial treatment.',
                price: '$60'
              },
              {
                title: 'Aromatherapy',
                description: 'Experience relaxation through essential oils that calm the mind and uplift your spirit.',
                price: '$70'
              },
              {
                title: 'Hot Stone Therapy',
                description: 'Indulge in a soothing massage using heated stones to relax and rejuvenate muscles.',
                price: '$90'
              },
              {
                title: 'Detox Package',
                description: 'A complete detox program including massages, scrubs, and detoxifying facials.',
                price: '$150'
              },
              {
                title: 'Couples Retreat',
                description: 'Enjoy a relaxing spa experience with your partner, complete with massages and facials.',
                price: '$200'
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              >
                <h2 className="text-2xl font-bold text-teal-600 mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="font-bold text-teal-500">Price: {service.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-teal-600 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-700 transition duration-300">
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaPage;
