import React from 'react';
import CheckAvailabilityNavbar from '../components/CheckAvailabilityNavbar';


const JuniorSuitePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Check availability navbar */}
      <CheckAvailabilityNavbar />
      {/* Other luxury suite details */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">Junior Suite</h1>
        <p className="mt-4">Details about the Junior Suite...</p>
      </div>
    </div>
  );
};

export default JuniorSuitePage;

