import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const { adults, children, checkInDate, checkOutDate } = location.state || {};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Booking Confirmation</h1>
      <div className="space-y-4">
        <p><strong>Check-in Date:</strong> {checkInDate}</p>
        <p><strong>Check-out Date:</strong> {checkOutDate}</p>
        <p><strong>Adults:</strong> {adults}</p>
        <p><strong>Children:</strong> {children}</p>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
