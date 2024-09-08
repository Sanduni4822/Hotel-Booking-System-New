// src/layouts/BookingLayout.jsx

import React from 'react';
import CheckAvailabilityNavbar from '../components/CheckAvailabilityNavbar';
import { Outlet } from 'react-router-dom';

const BookingLayout = () => {
  return (
    <div>
      <CheckAvailabilityNavbar />
      <div className="p-4">
        {/* This is where the page content will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default BookingLayout;
