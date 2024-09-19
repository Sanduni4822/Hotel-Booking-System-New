import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import Footer from './Footer';

const BaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-black p-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Rooms
            </Link>
          </li>
          <li>
            <Link to="/activities" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Activities
            </Link>
          </li>
          <li>
            <Link to="/offers" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Offers
            </Link>
          </li>
          <li>
            <Link to="/facilities" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Login/Join
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/book" className="text-black bg-white hover:bg-gray-300 px-3 py-2 rounded">
              Book Now!
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-grow">
        <Outlet/>
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
