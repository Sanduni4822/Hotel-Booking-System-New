import React, { useState } from 'react';

const CheckAvailabilityNavbar = () => {
  const [guests, setGuests] = useState(1);

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 rounded-md">
        {/* Guests */}
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm mb-1">Guests</label>
          <input 
            type="number" 
            value={guests}
            onChange={handleGuestsChange}
            min="1"
            className="p-2 border border-gray-300 rounded-md"
          />
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
            <option value="NATIONALITY">NATIONALITY</option>
            {/* Add more nationality options as needed */}
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
        <div className="flex items-end">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailabilityNavbar;
