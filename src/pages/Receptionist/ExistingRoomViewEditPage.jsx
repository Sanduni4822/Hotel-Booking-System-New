import React from 'react';
import { useLocation } from 'react-router-dom';

const ExistingRoomViewEditPage = () => {
  const location = useLocation();
  const { roomId } = location.state || {}; // Default to empty object if no state

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Edit Room</h2>
        <p>Editing Room ID: {roomId}</p>
        {/* Render rest of the edit form */}
      </div>
    </div>
  );
};

export default ExistingRoomViewEditPage;
