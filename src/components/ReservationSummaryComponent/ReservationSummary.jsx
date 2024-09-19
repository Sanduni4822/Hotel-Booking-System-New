import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ReservationSummary = ({ reservation }) => {
  const {
    checkInDate,
    checkOutDate,
    numberOfDays,
    adults,
    children,
    totalPayment,
  } = reservation;

  const navigate = useNavigate(); // Use navigate hook

  const handleConfirmBooking = () => {
    navigate('/confirm-booking'); // Navigate to the Confirm Booking Page
  };

  return (
    <div className="max-w-xs ml-10 p-4 bg-white border border-black">
      <h2 className="text-lg font-bold mb-4">Reservation Summary</h2>

      {/* Check-in Date */}
      <div className="mb-2">
        <span className="font-semibold">Check-in Date:</span> {checkInDate}
      </div>

      {/* Check-out Date */}
      <div className="mb-2">
        <span className="font-semibold">Check-out Date:</span> {checkOutDate}
      </div>

      {/* Number of Days Booked */}
      <div className="mb-2">
        <span className="font-semibold">Number of Days Booked:</span> {numberOfDays}
      </div>

      {/* Number of Guests */}
      <div className="mb-2">
        <span className="font-semibold">Number of Guests:</span>
        <div>
          Adults: {adults} <br />
          Children: {children}
        </div>
      </div>

      {/* Total Payment */}
      <div className="mb-4">
        <span className="font-semibold">Total Payment:</span> ${totalPayment.toFixed(2)}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirmBooking} // Add onClick to navigate
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
      >
        Confirm Booking & Proceed to Payment
      </button>
    </div>
  );
};

export default ReservationSummary;
