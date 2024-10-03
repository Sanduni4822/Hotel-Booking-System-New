import React from 'react';

const GymPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6 underline">Gym</h1>

      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Gym Description */}
        <div className="lg:w-2/3 space-y-4">
          <p className="text-lg">
            Our hotel features a modern gym designed to cater to fitness enthusiasts of all levels. Equipped with the latest
            cardio machines, free weights, and resistance training equipment, our fitness center ensures you can maintain your
            workout routine while enjoying your stay in Galle.
          </p>
          <p className="text-lg">
            With panoramic views of the lush landscape, exercising here becomes a refreshing experience. Whether you’re looking to unwind
            with a light workout or push your limits, our friendly staff is on hand to provide assistance and personalized fitness advice.
          </p>
          <p className="text-lg">
            Enjoy the convenience of a fully-equipped gym, complete with locker facilities and complimentary towels, to help you achieve
            your wellness goals while away from home.
          </p>
        </div>

        {/* Gym Image */}
        <div className="lg:w-1/3 flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EpaGxSP-O3xE2QJIks_fvGO3xMSZIXYqLA&s"
            alt="Modern Gym"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Gym Schedule */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Gym Schedule</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-blue-200">Day</th>
              <th className="px-4 py-2 bg-blue-200">Opening Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Monday - Friday</td>
              <td className="border px-4 py-2">6:00 AM - 10:00 PM</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Saturday</td>
              <td className="border px-4 py-2">7:00 AM - 8:00 PM</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sunday</td>
              <td className="border px-4 py-2">8:00 AM - 6:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GymPage;
