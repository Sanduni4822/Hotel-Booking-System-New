import React from 'react';
import Image from '../assets/contactus/Image.jpg';

const ContactUsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <img 
        src={Image} 
        alt="Example" 
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ContactUsPage;
