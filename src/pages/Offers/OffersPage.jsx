import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import earlyImg from '../../assets/Offers/early.jpg';
import familyImg from '../../assets/Offers/family.jpeg';
import honeymoonImg from '../../assets/Offers/honeymoon.jpg';
import staymoreImg from '../../assets/Offers/staymore.jpg';
import summerImg from '../../assets/Offers/summer.jpeg';
import offersImg from '../../assets/Offers/offers.jpg';

const OffersPage = () => {
  const navigate = useNavigate(); // Utilize useNavigate

  return (
    <div>
      <img 
        src={offersImg} 
        className="w-full h-[400px] object-cover bg-center" 
        style={{ opacity: 0.8 }} 
        alt="Offers"
      />
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-white shadow-lg">Offers & Deals</h1>
        <p className="mt-4 text-3xl text-yellow-300">Book Now & Save More</p>
      </section>

      <section className="flex flex-wrap justify-center py-10 bg-gray-100">
        <FacilityCard
          imgSrc={summerImg}
          title="Summer Offer"
          description="Enjoy a 20% Off on accommodation within month of October."
          navigateTo="/summer"
        />
        <FacilityCard
          imgSrc={familyImg}
          title="Family Offer"
          description="Spend happy & Take 10% Off for every family booking this year."
          navigateTo="/family"
        />
        <FacilityCard
          imgSrc={honeymoonImg}
          title="Honeymoon Offer"
          description="15% off for honeymoon couples celebrating a new start together."
          navigateTo="/honeymoon"
        />
        <FacilityCard
          imgSrc={earlyImg}
          title="Early Bird Offer"
          description="Book 20 days in advance and enjoy a 20% discount in October."
          navigateTo="/earlybird"
        />
        <FacilityCard
          imgSrc={staymoreImg}
          title="Stay More Offer"
          description="Take 10% off & get free therapy when booking a minimum of 4 nights."
          navigateTo="/staymore"
        />
      </section>
    </div>
  );
};

const FacilityCard = ({ imgSrc, title, description, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-4 w-64 cursor-pointer">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <button 
          onClick={handleClick} 
          className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default OffersPage;
