import React, { useState } from 'react';

const BookingComponent = () => {
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState('2024-09-06');
  const [checkOutDate, setCheckOutDate] = useState('2024-09-07');
  const [nationality, setNationality] = useState('Non-resident');

  const toggleGuestOptions = () => {
    setShowGuestOptions(!showGuestOptions);
  };

  const handleAdultsChange = (event) => {
    setAdults(parseInt(event.target.value, 10)); // Ensure value is a number
  };

  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value, 10)); // Ensure value is a number
  };

  const handleGuestSelection = () => {
    setShowGuestOptions(false);
  };

  const handleSubmit = () => {
    // Perform submit action here
  };

  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      {/* Message Section */}
      <div className="bg-yellow-100 text-center text-yellow-800 p-2 font-semibold">
        <span>Book online - Get your guaranteed accommodation RIGHT NOW!</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4 p-4 rounded-md relative">
        {/* Flex container for inputs */}
        <div className="flex flex-grow space-x-4">
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
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {/* Check-Out Date */}
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Check-Out Date</label>
            <input 
              type="date" 
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {/* Nationality */}
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Nationality</label>
            <select 
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="Non-resident">Non-resident</option>
              <option value="Resident">Resident</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex w-full md:w-auto md:ml-auto mt-4 md:mt-0">
          <button 
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition ml-auto"
            onClick={handleSubmit}
          >
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
