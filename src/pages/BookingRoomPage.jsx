import React from 'react';
import BookingSummary from '../components/BookingSummary';
import { useLocation } from 'react-router-dom';

const BookingRoomPage = () => {
  // Get the state passed via navigation
  const location = useLocation();
  const { adults, children, checkInDate, checkOutDate, nationality, promoCode } = location.state || {};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Booking Summary</h1>
      <BookingSummary 
        adults={adults} 
        children={children} 
        checkInDate={checkInDate} 
        checkOutDate={checkOutDate} 
        nationality={nationality} 
        promoCode={promoCode}
      />
    </div>
  );
};

export default BookingRoomPage;
