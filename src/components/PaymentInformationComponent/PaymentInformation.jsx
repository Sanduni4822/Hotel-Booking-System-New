import React, { useState } from 'react';

const PaymentInformation = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    cardType: '',
    cardNumber: '',
    cardHolder: '',
    cvc: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const cardNumberRegex = /^\d{16}$/;
    const cvcRegex = /^\d{3,4}$/;

    if (!formData.cardType.trim()) {
      errors.cardType = 'Card type is required';
    }
    if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }
    if (!formData.cardHolder.trim()) {
      errors.cardHolder = 'Card holder name is required';
    }
    if (!cvcRegex.test(formData.cvc)) {
      errors.cvc = 'CVC must be 3 or 4 digits';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', formData);
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
        onSubmit={handleSubmit}
      >
        
        {/* Section Title with Icon */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-2">
            2
          </div>
          <h2 className="text-2xl font-bold text-gray-700">PAYMENT INFORMATION</h2>
        </div>
        
        {/* Card Type and Number Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cardType">
              Card Type
            </label>
            <input
              id="cardType"
              type="text"
              placeholder="Enter card type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.cardType}
              onChange={handleInputChange}
            />
            {formErrors.cardType && (
              <p className="text-red-500">{formErrors.cardType}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="Enter card number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.cardNumber}
              onChange={handleInputChange}
            />
            {formErrors.cardNumber && (
              <p className="text-red-500">{formErrors.cardNumber}</p>
            )}
          </div>
        </div>

        {/* Card Holder Name and CVC Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cardHolder">
              Card Holder Name
            </label>
            <input
              id="cardHolder"
              type="text"
              placeholder="Enter card holder name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.cardHolder}
              onChange={handleInputChange}
            />
            {formErrors.cardHolder && (
              <p className="text-red-500">{formErrors.cardHolder}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvc">
              CVC
            </label>
            <input
              id="cvc"
              type="text"
              placeholder="Enter CVC"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={formData.cvc}
              onChange={handleInputChange}
            />
            {formErrors.cvc && (
              <p className="text-red-500">{formErrors.cvc}</p>
            )}
          </div>
        </div>

        {/* Expiry Month and Year Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryMonth">
              Expiry Month
            </label>
            <input
              id="expiryMonth"
              type="text"
              placeholder="MM"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryYear">
              Expiry Year
            </label>
            <input
              id="expiryYear"
              type="text"
              placeholder="YYYY"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </div>

        {/* Payment Method Radio Buttons */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Payment Method</label>
          <div className="flex items-center">
            <label className="mr-4 flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Via Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Via Paypal
            </label>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-700">
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Confirm Booking Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring"
        >
          CONFIRM BOOKING
        </button>
      </form>
    </div>
  );
};

export default PaymentInformation;
