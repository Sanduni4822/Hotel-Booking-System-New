import React from 'react';
import Image from '../assets/contctimage/Image.jpg'; 

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-8 w-full max-w-4l">
        <img 
          src={Image}
          alt="Example" 
          className="max-w-full h-auto rounded-lg shadow-lg mb-8"
        />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">WE LOVE TO HEAR FROM YOU</h1>
        <hr className="border-t-2 border-black w-1/4 mx-auto" />
      </div>
      <div className="max-w-4xl text-center">
        <p className="mb-4">
          DONEC PEDE JUSTO, FRINGILLA VEL, ALIQUET NEC, VULPUTATE EGET, ARCU.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p>
            Hotel La-Vila is a famous hotel and well-known hotel with the best hospitality in Waligama area. We expect to give our guests a better service, to accommodate more guests & give a lifetime experience as a rising hotel.
          </p>
          <p>
            We hope our hotel will give chance to guests to plan their vacation in an effective way by providing numerous facilities and services.
          </p>
        </div>
        <p className="mt-4">
          We are grateful to you as our valuable guest if you could give reviews about our hotel then it will be really helpful for us.Also you can contact our hotel anytime for any information.
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
