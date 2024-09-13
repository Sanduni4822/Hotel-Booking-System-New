import React from 'react';
import CheckAvailabilityNavbar from '../components/CheckAvailabilityNavbar';
import { Outlet } from 'react-router-dom';

const BookingLayout = () => {
  return (
    <div>
      <CheckAvailabilityNavbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default BookingLayout;
