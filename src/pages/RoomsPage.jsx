import React from 'react';
import room from '../assets/rooms/room.jpg';

const RoomsPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
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
  );
};

export default RoomsPage;
