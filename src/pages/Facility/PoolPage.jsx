import React, { useState } from 'react';

const PoolPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    poolPartyBooking: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{
        backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/552936009.jpg?k=288ad9b9edbea816581eb7938904bd6184408031dedb9718016a64023685b634&o=&hp=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Section: Swimming Pool Overview */}
      <section className="mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Swimming Pool</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our luxurious swimming pool is nestled among tropical gardens with stunning views of the Indian Ocean.
          Whether you're here to relax or swim, enjoy a tranquil experience with poolside service and breathtaking scenery.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Designed for both family fun and relaxation, the pool offers shallow areas for children and deeper sections for seasoned swimmers.
        </p>
      </section>

      {/* Section: Pool Party Bookings */}
      <section className="mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Book Your Pool Party</h2>
        <p className="text-lg text-gray-700 mb-6">
          Celebrate your special event at our pool! We offer customized pool party packages for groups of all sizes:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li className="text-lg text-gray-700">Small Party (up to 10 people): <strong>$100</strong></li>
          <li className="text-lg text-gray-700">Medium Party (up to 20 people): <strong>$180</strong></li>
          <li className="text-lg text-gray-700">Large Party (up to 30 people): <strong>$250</strong></li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're planning a birthday party, reunion, or corporate event, our pool provides the perfect setting for fun and relaxation.
        </p>
      </section>

      {/* Section: Membership Registration */}
      <section className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-4 text-blue-600">Become a Pool Member</h2>
        <p className="text-lg text-gray-700 mb-6">
          Register below to gain access to our pool facilities. Membership grants you exclusive benefits, including special rates for pool parties and daily access to our pool area.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="poolPartyBooking"
              checked={formData.poolPartyBooking}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700 font-medium">
              I would like to book a pool party
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default PoolPage;
