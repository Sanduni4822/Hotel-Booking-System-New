import React from 'react';
import Image from '../assets/contctimage/Image.jpg'; 

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full">
        <img 
          src={Image}
          alt="Example" 
          className="w-full h-auto max-h-[400px] object-cover mb-8"
        />
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-6"> {/* Increased margin-bottom here */}
            WE LOVE TO<br />
            <span className="relative">
              HEAR FROM YOU
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black"></span>
            </span>
          </h1>
          <p className="mb-4">Your hospitality is our priority, Luxury at its finest.</p>
        </div>
        <div className="text-left text-justify">
          <p className="mb-4">
            Hotel La-Vila is a famous hotel and well-known hotel with the best hospitality in Waligama area. We expect to give our guests a better service, to accommodate more guests & give a lifetime experience as a rising hotel.
          </p>
          <p className="mb-4">
            We hope our hotel will give chance to guests to plan their vacation in an effective way by providing numerous facilities and services.
          </p>
          <p className="mb-4">
            We are grateful to you as our valuable guest if you could give reviews about our hotel then it will be really helpful for us. Also, you can contact our hotel anytime for any information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
