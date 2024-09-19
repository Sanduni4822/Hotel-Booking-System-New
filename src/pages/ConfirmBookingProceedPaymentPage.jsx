import React, { useState } from 'react';
import PaymentInformation from '../components/PaymentInformationComponent/PaymentInformation'; // Import Payment Information component

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

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      {/* Parent container for both forms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mt-1">
        
        {/* Left side: Confirm Booking Form */}
        <div className="bg-white p-6 border border-gray-400">
          <form onSubmit={handleSubmit} className="w-full">
            {/* Section Title */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-700">Your Information</h2>
            </div>

            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                  First Name
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
                  Last Name
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

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
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
                  Phone
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

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                Address
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

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
                  City
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
                  State/Country
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

            {/* Postcode */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="postcode">
                Postcode
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

            {/* Notes */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side: Payment Information */}
        <div>
          <PaymentInformation />
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingProceedPaymentPage;
