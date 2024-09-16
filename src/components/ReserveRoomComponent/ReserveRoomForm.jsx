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

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Reserve Room</h2>
      <form onSubmit={handleSubmit}>

        {/* Fullname */}
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700">Fullname</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your fullname"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Lodging Period */}
        <div className="mb-4">
          <label className="block text-gray-700">Lodging Period</label>
          <div className="flex space-x-4">
            <input
              type="date"
              id="checkinDate"
              name="checkinDate"
              value={formData.checkinDate}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
            <input
              type="date"
              id="checkoutDate"
              name="checkoutDate"
              value={formData.checkoutDate}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
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
              className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
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
              className="w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="0"
              required
            />
          </div>
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
