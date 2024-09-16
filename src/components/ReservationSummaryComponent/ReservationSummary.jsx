import React from 'react';

const ReservationSummary = ({ reservation }) => {
  const {
    checkInDate,
    checkOutDate,
    numberOfDays,
    adults,
    children,
    totalPayment,
  } = reservation;

  return (
    <div className="max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Reservation Summary</h2>

      {/* Check-in Date */}
      <div className="mb-4 flex justify-between">
        <span className="font-semibold">Check-in Date:</span> 
        <span>{checkInDate}</span>
      </div>

      {/* Check-out Date */}
      <div className="mb-4 flex justify-between">
        <span className="font-semibold">Check-out Date:</span> 
        <span>{checkOutDate}</span>
      </div>

      {/* Number of Days Booked */}
      <div className="mb-4 flex justify-between">
        <span className="font-semibold">Number of Days:</span> 
        <span>{numberOfDays}</span>
      </div>

      {/* Number of Guests */}
      <div className="mb-4">
        <span className="font-semibold">Guests:</span>
        <div className="ml-4">
          <p>Adults: {adults}</p>
          <p>Children: {children}</p>
        </div>
      </div>

      {/* Total Payment */}
      <div className="mb-6 flex justify-between">
        <span className="font-semibold">Total Payment:</span> 
        <span>${totalPayment.toFixed(2)}</span>
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-green-500 text-white py-3 px-4 font-semibold rounded-md hover:bg-green-600 transition-colors duration-200">
        Confirm Booking & Proceed to Payment
      </button>
    </div>
  );
};

export default ReservationSummary;
