import React from 'react';
import room from '../assets/rooms/room.jpg';

const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
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
    </div>
  );
};

export default RoomsPage;
