import React, { useState } from 'react';

const CheckAvailabilityNavbar = () => {
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const toggleGuestOptions = () => {
    setShowGuestOptions(!showGuestOptions);
  };

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const handleGuestSelection = () => {
    setShowGuestOptions(false);
  };

  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 rounded-md relative">
        
        {/* Guests */}
        <div className="relative flex flex-col w-full md:w-auto">
          <label className="text-gray-600 text-sm mb-1">Guests</label>
          <input 
            type="text" 
            value={`${adults} Adults, ${children} Children`}
            onClick={toggleGuestOptions}
            readOnly
            className="p-2 border border-gray-300 rounded-md cursor-pointer"
          />
          {showGuestOptions && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg p-4 z-10">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm">Adults</label>
                  <input 
                    type="number" 
                    value={adults}
                    onChange={handleAdultsChange}
                    min="1"
                    className="w-16 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm">Children</label>
                  <input 
                    type="number" 
                    value={children}
                    onChange={handleChildrenChange}
                    min="0"
                    className="w-16 p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button 
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                  onClick={handleGuestSelection}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Check-In Date */}
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm mb-1">Check-In Date</label>
          <input 
            type="date" 
            defaultValue="2024-09-06" 
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        {/* Check-Out Date */}
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm mb-1">Check-Out Date</label>
          <input 
            type="date" 
            defaultValue="2024-09-07" 
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        {/* Nationality */}
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm mb-1">Nationality</label>
          <select 
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Non-resident">Non-resident</option>
            <option value="Resident">Resident</option>
          </select>
        </div>
        
        {/* Promo Code */}
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm mb-1">Promo Code</label>
          <input 
            type="text" 
            placeholder="Enter Promo Code" 
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Book Now Button */}
        <div className="absolute bottom-4 right-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailabilityNavbar;
