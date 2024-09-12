import React from 'react';

const ReservationSummary = ({ adults, children, checkInDate, checkOutDate, nationality, promoCode }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-sm mx-auto shadow-md">
      <h2 className="text-lg font-semibold mb-4">Reservation Summary</h2>
      
      {/* Check-in Date */}
      <div className="mb-2">
        <p className="text-sm text-gray-600">Check-in Date:</p>
        <p className="text-base font-medium">{checkInDate}</p>
      </div>

      {/* Check-out Date */}
      <div className="mb-2">
        <p className="text-sm text-gray-600">Check-out Date:</p>
        <p className="text-base font-medium">{checkOutDate}</p>
      </div>

      {/* Number of Guests */}
      <div className="mb-2">
        <p className="text-sm text-gray-600">Number of Guest</p>
        <p className="text-base font-medium">Adults: {adults}</p>
        <p className="text-base font-medium">Children: {children}</p>
      </div>

      {/* Nationality */}
      <div className="mb-2">
        <p className="text-sm text-gray-600">Nationality:</p>
        <p className="text-base font-medium">{nationality}</p>
      </div>

      {/* Promo Code */}
      <div className="mb-2">
        <p className="text-sm text-gray-600">Promo Code:</p>
        <p className="text-base font-medium">{promoCode}</p>
      </div>

      {/* Total Payment */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">Total payment:</p>
        <p className="text-lg font-bold">$1100</p>
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
        Confirm Booking & proceed to payment
      </button>
    </div>
  );
};

export default ReservationSummary;
