import React from 'react';
import DateFilter from "../../components/ReceptionistBookingDetails/DateFilter"; // Import the DateFilter component

const BookingDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Date Filter Section */}
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg mb-4">
        <DateFilter /> {/* Render DateFilter */}
      </div>

      {/* Booking Table Section */}
      <div className="w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold p-4 text-center">Bookings</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left">Booking Id</th>
              <th className="px-4 py-2 text-left">User Id</th>
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">From</th>
              <th className="px-4 py-2 text-left">To</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-600">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-700">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-600">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetailsPage;
