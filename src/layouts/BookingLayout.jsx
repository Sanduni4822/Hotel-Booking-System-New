// src/layouts/BookingLayout.jsx

import React from 'react';
import CheckAvailabilityNavbar from '../components/CheckAvailabilityNavbar';
import { Outlet } from 'react-router-dom';
import ReservationSummary from '../components/SubmitButtonComponent/Reservationsummary';

const BookingLayout = () => {
  return (
    <div>
      <CheckAvailabilityNavbar />
      <ReservationSummary/>
      <div className="p-4">
        {/* This is where the page content will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default BookingLayout;
