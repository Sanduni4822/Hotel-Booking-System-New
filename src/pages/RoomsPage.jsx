import React from 'react';
import room from '../assets/rooms/room.jpg';

const rooms = [
  { id: 1, name: 'Luxury Suite', imgSrc: '/images/luxury-suite.jpg', rating: 5, reviews: 1 },
  { id: 2, name: 'Standard', imgSrc: '/images/standard.jpg', rating: 4, reviews: 1 },
  { id: 3, name: 'The Penthouse', imgSrc: '/images/penthouse.jpg', rating: 5, reviews: 1 },
  { id: 4, name: 'Grand Suite', imgSrc: '/images/grand-suite.jpg', rating: 5, reviews: 1 },
  { id: 5, name: 'Junior Suite', imgSrc: '/images/junior-suite.jpg', rating: 4, reviews: 1 },
  { id: 6, name: 'Standard', imgSrc: '/images/standard2.jpg', rating: 4, reviews: 1 },
  { id: 7, name: 'Family Special', imgSrc: '/images/family-special.jpg', rating: 5, reviews: 1 },
  { id: 8, name: 'Premium Room', imgSrc: '/images/premium-room.jpg', rating: 4, reviews: 1 },
  { id: 9, name: 'Deluxe Suite', imgSrc: '/images/deluxe-suite.jpg', rating: 5, reviews: 1 },
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
