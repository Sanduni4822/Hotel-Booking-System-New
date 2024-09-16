import React, { useState } from 'react';

const ReserveRoomForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    checkinDate: '',
    checkoutDate: '',
    adults: 0,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  // Calculate total guests
  const totalGuests = parseInt(formData.adults, 10) + parseInt(formData.children, 10);

  return (
    <div className="max-w-md mx-auto p-6"> {/* Removed bg-white, rounded-md, and shadow-md */}
      <h2 className="text-2xl font-bold mb-6">Reserve Room</h2>
      <form onSubmit={handleSubmit}>

        {/* Lodging Period */}
        <div className="mb-4">
          <label className="block text-gray-700">Booking Period</label>
          <div className="flex space-x-4">
            <input
              type="date"
              id="checkinDate"
              name="checkinDate"
              value={formData.checkinDate}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="date"
              id="checkoutDate"
              name="checkoutDate"
              value={formData.checkoutDate}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        </div>

        {/* Number of Guests */}
        <div className="mb-4">
          <label className="block text-gray-700">Number of Guest</label>
          <div className="flex space-x-4">
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="0"
              className="w-1/2 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="0"
              required
            />
            <input
              type="number"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              className="w-1/2 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="0"
              required
            />
          </div>
        </div>

        {/* Total Number of Guests */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Total Guests: {totalGuests}</label>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReserveRoomForm;
