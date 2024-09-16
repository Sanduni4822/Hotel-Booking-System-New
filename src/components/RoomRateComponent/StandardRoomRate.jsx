import React from 'react';

const StandardRoomRate = () => {
  return (
    <div className="p-6 bg-white space-y-4">
      <div className="border-b pb-4 mt-5">
        <h2 className="text-xl font-semibold text-gray-700">View all available rates for this room</h2>
      </div>

      <div className="pt-4 space-y-2">
        <div className="flex items-center space-x-2 text-red-700">
          <span className="text-md font-bold">Minimum 3 Nights Stay Required:</span>
          <span className="text-sm text-gray-600">10% Off Saving on Standard Room</span>
        </div>
        <p className="text-sm text-blue-800 mt-3">Wi-Fi, Gym, Parking</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          <p>Best Rate with Breakfast and</p>
          <p>Free Wi-Fi</p>

          <p className="mt-1 text-sm text-gray-600">$ 63 additional taxes and fees per night</p>
        </div>

        <div className="text-right">
          <div className="flex flex-col items-center"> {/* Changed to flex-col */}
            <span className="text-sm line-through text-gray-500 ml-10">$267</span> {/* Original price above */}
            <div className="flex items-center space-x-2">
              <span className="bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
              <span className="text-2xl font-bold text-red-700">$234</span> {/* Discounted price below */}
            </div>
          </div>
          <p className="text-sm text-gray-600">Avg. per night</p>
        </div>
      </div>
    </div>
  );
};

export default StandardRoomRate;
