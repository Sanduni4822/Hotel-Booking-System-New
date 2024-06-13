import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Content will go here */}
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
