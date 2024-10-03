import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../assets/Grandsuite/Image1.webp'; 
import Image2 from '../../assets/Grandsuite/Image2.webp'; 
import Image3 from '../../assets/Grandsuite/Image3.webp'; 
import Image4 from '../../assets/Grandsuite/Image4.webp';

// Importing Icon Images
import WifiIcon from '../../assets/facilityicons/WifiIcon.png'; 
import CleaningIcon from '../../assets/facilityicons/CleaningIcon.png';
import AirConditionerIcon from '../../assets/facilityicons/AirConditionerIcon.png';
import ShowerIcon from '../../assets/facilityicons/ShowerIcon.jpg';
import MinibarIcon from '../../assets/facilityicons/MinibarIcon.png';
import SafetyLockerIcon from '../../assets/facilityicons/SafetyLockerIcon.png';
import BreakfastIcon from '../../assets/facilityicons/BreakfastIcon.png';
import TowelsIcon from '../../assets/facilityicons/TowelsIcon.jpg';

import maxguests from '../../assets/Icons/maxguests.png'; 
import bedtype from '../../assets/Icons/bedtype.png'; 
import area from '../../assets/Icons/area.png'; 

import GrandSuiteRoomRate from '../../components/RoomRateComponent/GrandSuiteRoomRate';
import ReserveRoomForm from '../../components/ReserveRoomComponent/ReserveRoomForm';
import ReservationSummary from '../../components/ReservationSummaryComponent/ReservationSummary';

const GRAND_SUITE_ROOM_RATE = 261; // Set room rate per night for Grand Suite

const GrandSuitePage = () => {
  const [reservationDetails, setReservationDetails] = useState(null);

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

  // Handle form submission from the ReserveRoomForm component
  const handleFormSubmit = (formData) => {
    const checkInDate = new Date(formData.checkinDate);
    const checkOutDate = new Date(formData.checkoutDate);

    // Calculate the number of days between check-in and check-out
    const numberOfDays = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    // Calculate total payment based on the number of booked days and room rate
    const totalPayment = numberOfDays * GRAND_SUITE_ROOM_RATE;

    // Save the reservation details in the state
    setReservationDetails({
      checkInDate: formData.checkinDate,
      checkOutDate: formData.checkoutDate,
      numberOfDays,
      adults: formData.adults,
      children: formData.children,
      totalPayment,
    });
  };

  return (
    <div className="p-6">
      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column (Title, Image Slider, Paragraph, and Additional Info) */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Grand Suite</h1>
          
          {/* Additional Information Section (Max Guests, Bed Type, Area) */}
          <div className="flex justify-between items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <img src={maxguests} alt="Max Guests" className="w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold">Max. Guests</h3>
                <p className="text-sm">3 Adults / 1 Child</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <img src={bedtype} alt="Bed Type" className="w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold">Bed Type</h3>
                <p className="text-sm">King size</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <img src={area} alt="Room Area" className="w-6 h-6" />
              <div>
                <h3 className="text-sm font-semibold">Area</h3>
                <p className="text-sm">52 sq. m</p>
              </div>
            </div>
          </div>

          {/* Image Slider Section */}
          <div className="mb-6">
            <Slider {...settings}>
              <div>
                <img src={Image1} alt="Grand Suite 1" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={Image2} alt="Grand Suite 2" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={Image3} alt="Grand Suite 3" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div>
                <img src={Image4} alt="Grand Suite 4" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </Slider>
          </div>

          {/* Text Section */}
          <p className="text-sm mb-6">
            The Grand Suite at a seaside hotel in Sri Lanka offers luxurious comfort with stunning ocean views. This spacious suite features a king-sized bed, elegant furnishings, and a private balcony overlooking the pristine beach. The room is designed with modern amenities, including a lavish bathroom with a soaking tub, a living area, and a mini-bar. Guests can enjoy direct access to the beach and exclusive services, making it an ideal retreat for relaxation and indulgence.
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

        {/* Right Column */}
        <div className="space-y-6">
          {/* RoomRate Component */}
          <GrandSuiteRoomRate />
          
          {/* ReserveRoomForm Component */}
          <ReserveRoomForm onSubmit={handleFormSubmit} />
          
          {/* Conditionally Render Reservation Summary */}
          {reservationDetails && (
            <ReservationSummary reservation={reservationDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GrandSuitePage;
