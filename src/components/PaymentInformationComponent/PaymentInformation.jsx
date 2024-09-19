import React, { useState } from 'react';

const PaymentInformation = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    cardType: '',
    cardNumber: '',
    cardHolder: '',
    cvc: '',
    expiryMonth: '',
    expiryYear: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setAgreeToTerms(checked);
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    const cardNumberRegex = /^\d{16}$/;
    const cvcRegex = /^\d{3,4}$/;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Months are 0-based, so +1 to get current month

    // Card Type validation
    if (!formData.cardType.trim()) {
      errors.cardType = 'Card type is required';
    }

    // Card Number validation
    if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    // Card Holder validation
    if (!formData.cardHolder.trim()) {
      errors.cardHolder = 'Card holder name is required';
    }

    // CVC validation
    if (!cvcRegex.test(formData.cvc)) {
      errors.cvc = 'CVC must be 3 or 4 digits';
    }

    // Expiry Month validation
    const expiryMonth = parseInt(formData.expiryMonth, 10);
    if (!expiryMonth || expiryMonth < 1 || expiryMonth > 12) {
      errors.expiryMonth = 'Expiry month must be valid';
    }

    // Expiry Year validation
    const expiryYear = parseInt(formData.expiryYear, 10);
    if (!expiryYear || expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
      errors.expiryYear = 'Expiry year must be valid';
    }

    // Terms and Conditions validation
    if (!agreeToTerms) {
      errors.agreeToTerms = 'Tick this';
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
        className="bg-white p-6  w-full max-w-xl border border-gray-400"
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
              value={formData.expiryMonth}
              onChange={handleInputChange}
            />
            {formErrors.expiryMonth && (
              <p className="text-red-500">{formErrors.expiryMonth}</p>
            )}
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
              value={formData.expiryYear}
              onChange={handleInputChange}
            />
            {formErrors.expiryYear && (
              <p className="text-red-500">{formErrors.expiryYear}</p>
            )}
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
          <input
            type="checkbox"
            id="terms"
            checked={agreeToTerms}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-gray-700">
            I agree to the Terms and Conditions
          </label>
          {formErrors.agreeToTerms && (
            <p className="text-red-500 ml-4">{formErrors.agreeToTerms}</p>
          )}
        </div>

        {/* Confirm Booking Button */}
        <button
          type="submit"
          className=" bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:ring"
        >
          CONFIRM BOOKING
        </button>
      </form>
    </div>
  );
};

export default PaymentInformation;
