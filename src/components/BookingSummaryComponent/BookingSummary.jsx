import React from 'react';

const BookingSummary = ({ adults, children, checkInDate, checkOutDate, nationality, promoCode }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Booking Details</h2>
      <ul className="space-y-2">
        <li><strong>Adults:</strong> {adults}</li>
        <li><strong>Children:</strong> {children}</li>
        <li><strong>Check-In Date:</strong> {checkInDate}</li>
        <li><strong>Check-Out Date:</strong> {checkOutDate}</li>
        <li><strong>Nationality:</strong> {nationality}</li>
        <li><strong>Promo Code:</strong> {promoCode ? promoCode : 'N/A'}</li>
      </ul>
    </div>
  );
};

export default BookingSummary;
