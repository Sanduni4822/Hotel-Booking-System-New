import React from 'react';

const ConfirmBookingProceedPaymentPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        
        {/* First Name and Last Name as two columns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
              First Name <span className="text-red-500"></span>
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
              Last Name <span className="text-red-500"></span>
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </div>

        {/* Email and Phone as two columns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email <span className="text-red-500"></span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone <span className="text-red-500"></span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address <span className="text-red-500"></span>
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter your address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* City and State/Country as two columns */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
              City <span className="text-red-500"></span>
            </label>
            <input
              id="city"
              type="text"
              placeholder="Enter your city"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
              State/Country <span className="text-red-500"></span>
            </label>
            <input
              id="state"
              type="text"
              placeholder="Enter your state or country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </div>

        {/* Postcode Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="postcode">
            Postcode <span className="text-red-500"></span>
          </label>
          <input
            id="postcode"
            type="text"
            placeholder="Enter your postcode"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Notes Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="notes">
            Notes <span className="text-red-500"></span>
          </label>
          <textarea
            id="notes"
            placeholder="Enter any additional notes"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConfirmBookingProceedPaymentPage;
