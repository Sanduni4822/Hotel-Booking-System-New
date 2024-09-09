import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../assets/Premiumroom/Image1.jpg'; 
import Image2 from '../assets/Premiumroom/Image2.jpg'; 
import Image3 from '../assets/Premiumroom/Image3.jpg'; 

// Importing Icon Images
import WifiIcon from '../assets/facilityicons/WifiIcon.png'; 
import CleaningIcon from '../assets/facilityicons/CleaningIcon.png';
import AirConditionerIcon from '../assets/facilityicons/AirConditionerIcon.png';
import ShowerIcon from '../assets/facilityicons/ShowerIcon.jpg';
import MinibarIcon from '../assets/facilityicons/MinibarIcon.png';
import SafetyLockerIcon from '../assets/facilityicons/SafetyLockerIcon.png';
import BreakfastIcon from '../assets/facilityicons/BreakfastIcon.png';
import TowelsIcon from '../assets/facilityicons/TowelsIcon.jpg';

import maxguests from '../assets/Icons/maxguests.png'; 
import bedtype from '../assets/Icons/bedtype.png'; 
import area from '../assets/Icons/area.png'; 

const PremiumRoomPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const amenities = [
    { icon: WifiIcon, label: 'Free Wi-Fi' },
    { icon: CleaningIcon, label: 'Daily Cleaning' },
    { icon: AirConditionerIcon, label: 'Air Conditioner' },
    { icon: ShowerIcon, label: 'Shower' },
    { icon: MinibarIcon, label: 'Minibar' },
    { icon: SafetyLockerIcon, label: 'Safety Locker' },
    { icon: BreakfastIcon, label: 'Breakfast Included' },
    { icon: TowelsIcon, label: 'Fresh Towels' },
  ];

  return (
    <div className="p-6">
      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column (Title, Image Slider, Paragraph, and Additional Info) */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Premium room</h1>
          
          {/* Additional Information Section (Max Guests, Bed Type, Area) */}
          <div className="flex justify-between items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <img src={maxguests} alt="Max Guests" className="w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold">Max. Guests</h3>
                <p className="text-sm">2 Adults / 1 Child</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <img src={bedtype} alt="Bed Type" className="w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold">Bed Type</h3>
                <p className="text-sm">king size</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <img src={area} alt="Room Area" className="w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold">Area</h3>
                <p className="text-sm">51.34 sq. m</p>
              </div>
            </div>
          </div>

          {/* Image Slider Section */}
          <div className="mb-6">
            <Slider {...settings}>
              <div>
                <img src={Image1} alt="Deluxe Suite 1" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={Image2} alt="Deluxe Suite 2" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={Image3} alt="Deluxe Suite 3" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </Slider>
          </div>

          {/* Text Section */}
          <p className="text-sm mb-6">
          A premium room in a seaside hotel in Sri Lanka offers a luxurious and serene experience with stunning ocean views. The room features elegant decor, a comfortable king-sized bed, modern amenities, and a private balcony where you can enjoy the soothing sound of the waves. Perfect for relaxation, the room also includes a spacious bathroom with premium toiletries, air conditioning, a flat-screen TV, and complimentary Wi-Fi. The hotel's prime location allows easy access to the beach, ensuring a memorable stay surrounded by natural beauty.
          </p>

          {/* Room Services Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Room Services</h2>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img src={amenity.icon} alt={amenity.label} className="w-6 h-6" />
                  <span className="text-sm">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Leave empty or add more content later) */}
        <div className="space-y-6">
          {/* Additional content can go here if needed */}
        </div>

      </div>
    </div>
  );
};

export default PremiumRoomPage;
