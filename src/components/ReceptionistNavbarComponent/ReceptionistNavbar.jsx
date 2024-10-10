import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ReceptionistNavbar = () => {
  return (
    <nav className="flex justify-center space-x-10 py-4 bg-white shadow-lg">
      <Link to="/bookings" className="text-gray-700 hover:text-blue-500 font-semibold">
        Booking Details
      </Link>
      <Link to="/Roomsd" className="text-gray-700 hover:text-blue-500 font-semibold">
        Rooms Details
      </Link>
      <Link to="/add-room" className="text-gray-700 hover:text-blue-500 font-semibold border-b-2 border-blue-500">
        Add Room
      </Link>
    </nav>
  );
};

export default ReceptionistNavbar;
