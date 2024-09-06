import React from 'react';
import room from '../assets/rooms/room.jpg';
import LuxurySuite from '../assets/roomstypes/LuxurySuite.jpg';
import Standard from '../assets/roomstypes/Standard.jpg';
import Penthouse from '../assets/roomstypes/Penthouse.jpg';
import GrandSuite from '../assets/roomstypes/GrandSuite.jpg';
import JuniorSuite from '../assets/roomstypes/JuniorSuite.jpg';
import FamilySpecial from '../assets/roomstypes/FamilySpecial.jpg';
import PremiumRoom from '../assets/roomstypes/PremiumRoom.jpg';
import DeluxeSuite from '../assets/roomstypes/DeluxeSuite.jpg';

import WifiIcon from '../assets/facilityicons/WifiIcon.png';
import CleaningIcon from '../assets/facilityicons/CleaningIcon.png';
import AirConditionerIcon from '../assets/facilityicons/AirConditionerIcon.png';
import ShowerIcon from '../assets/facilityicons/ShowerIcon.jpg';
import MinibarIcon from '../assets/facilityicons/MinibarIcon.png';
import SafetyLockerIcon from '../assets/facilityicons/SafetyLockerIcon.png';
import BreakfastIcon from '../assets/facilityicons/BreakfastIcon.png';
import TowelsIcon from '../assets/facilityicons/TowelsIcon.jpg';

const amenitiesWithIcons = {
  'Free wifi': WifiIcon,
  'Cleaning': CleaningIcon,
  'Air conditioner': AirConditionerIcon,
  'Shower': ShowerIcon,
  'Minibar': MinibarIcon,
  'Safety locker': SafetyLockerIcon,
  'Breakfast': BreakfastIcon,
  'Towels': TowelsIcon,
};

const rooms = [
  { id: 1, name: 'Luxury Suite', imgSrc: LuxurySuite, rating: 5, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 2, name: 'Standard', imgSrc: Standard, rating: 4, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 3, name: 'The Penthouse', imgSrc: Penthouse, rating: 5, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 4, name: 'Grand Suite', imgSrc: GrandSuite, rating: 5, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 5, name: 'Junior Suite', imgSrc: JuniorSuite, rating: 4, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 6, name: 'Family Special', imgSrc: FamilySpecial, rating: 5, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 7, name: 'Premium Room', imgSrc: PremiumRoom, rating: 4, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
  { id: 8, name: 'Deluxe Suite', imgSrc: DeluxeSuite, rating: 5, reviews: 1, amenities: ['Free wifi', 'Cleaning', 'Air conditioner', 'Shower', 'Minibar', 'Safety locker', 'Breakfast', 'Towels'] },
];

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="relative flex items-center justify-center w-full">
        <img 
          src={room} 
          alt="Room" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl font-bold">
            Rooms
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-8">
        <p className="text-2xl">
          EXTERIOR AND INTERIOR 360 TOUR <br />
          WITH 9 LOCATION
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-8">
        {rooms.map((room) => (
          <div key={room.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img src={room.imgSrc} alt={room.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{room.name}</h3>
              <ul className="flex flex-wrap mt-2">
                {room.amenities.map((amenity, index) => (
                  <li key={index} className="flex justify-center items-center m-1">
                    <img 
                      src={amenitiesWithIcons[amenity]} 
                      alt={`${amenity} icon`} 
                      className="w-5 h-5"
                    />
                  </li>
                ))}
              </ul>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  {'★'.repeat(room.rating)}
                  {'☆'.repeat(5 - room.rating)}
                </span>
                <span className="ml-2 text-gray-600">{room.reviews} review{room.reviews > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600">1 King Bed</span>
                <span className="text-gray-600">4 Guests</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
