import React from 'react';
import Image from '../assets/rooms/room.jpg';

const RoomsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <img 
        src={room} 
        alt="Example" 
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default RoomsPage;