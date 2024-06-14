import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-bold">Villa The Leaf</h2>
          <p>Thank you so much guys<br />for your valuable time</p>
          <div className="flex space-x-3 mt-2">
            <a href="https://www.facebook.com/profile.php?id=100063782626861&mibextid=LQQJ4d" className="text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/villatheleaf?igsh=MTEzdGQ5N2duaHhudQ==" className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Contact Info</h2>
          <p>📞 +94759782177</p>
          <p>📧 Upeksha917@gmail.com</p>
          <p>📍 Villa the leaf, Kalderam Watta, Pelena, Weligama</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Subscribe Us</h2>
          <p>Subscribe for latest updates</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md w-full mb-2"
            />
            <button
              type="submit"
              className="bg-white text-black p-2 rounded-md w-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
