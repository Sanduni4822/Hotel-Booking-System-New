import React, { useState } from 'react';

const ConfirmBookingProceedPaymentPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    notes: '',
  });
  
  const [errors, setErrors] = useState({});
  const [confirmViaPhone, setConfirmViaPhone] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(true);

  const handleCheckboxChange = (setter) => {
    setter((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = 'Enter the first name';
    if (!formData.lastName) formErrors.lastName = 'Enter the last name';
    if (!formData.email) formErrors.email = 'Enter the email';
    if (!formData.phone) formErrors.phone = 'Enter the phone number';
    if (!formData.address) formErrors.address = 'Enter the address';
    if (!formData.city) formErrors.city = 'Enter the city';
    if (!formData.state) formErrors.state = 'Enter the state/country';
    if (!formData.postcode) formErrors.postcode = 'Enter the postcode';

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Your Information</h2>
        
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
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
              Last Name <span className="text-red-500"></span>
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
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
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone <span className="text-red-500"></span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
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
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
              State/Country <span className="text-red-500"></span>
            </label>
            <input
              id="state"
              type="text"
              placeholder="Enter your state or country"
              value={formData.state}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
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
            value={formData.postcode}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.postcode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:border-blue-500`}
          />
          {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
        </div>

        {/* Notes Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="notes">
            Notes
          </label>
          <textarea
            id="notes"
            placeholder="Enter any additional notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>

        {/* Checkbox Section */}
        <div className="mb-4">
          <div className="flex items-center p-1 bg-gray-100 border rounded-md mb-2">
            <input
              id="confirmViaPhone"
              type="checkbox"
              checked={confirmViaPhone}
              onChange={() => handleCheckboxChange(setConfirmViaPhone)}
              className="mr-2"
            />
            <label htmlFor="confirmViaPhone" className="text-gray-700">
              I want to have the booking confirmation sent to my phone
            </label>
          </div>

          <div className="flex items-center p-1 bg-gray-100 border rounded-md">
            <input
              id="receiveOffers"
              type="checkbox"
              checked={receiveOffers}
              onChange={() => handleCheckboxChange(setReceiveOffers)}
              className="mr-2"
            />
            <label htmlFor="receiveOffers" className="text-gray-700">
              I want to receive news and information about special offers
            </label>
          </div>
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
