import React from 'react';
import DateFilter from "../../components/ReceptionistBookingDetails/DateFilter"; // Import the DateFilter component

const BookingDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Unified Date Filter and Booking Table Section */}
      <div className="w-full bg-white p-4 rounded-lg shadow-lg">
        <DateFilter /> {/* Render DateFilter */}
      </div>

      {/* Booking Table Section */}
      <div className="w-full bg-white rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold p-4 text-center">Bookings</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">S/N</th>
              <th className="border px-4 py-2 text-left">Booking ID</th>
              <th className="border px-4 py-2 text-left">Room Id</th>
              <th className="border px-4 py-2 text-left">Check-In Date</th>
              <th className="border px-4 py-2 text-left">Check-Out Date</th>
              <th className="border px-4 py-2 text-left">Guest Name</th>
              <th className="border px-4 py-2 text-left">Guest Email</th>
              <th className="border px-4 py-2 text-left">Adults</th>
              <th className="border px-4 py-2 text-left">Children</th>
              <th className="border px-4 py-2 text-left">Total Guest</th>
              <th className="border px-4 py-2 text-left">Confirmation</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows for visual structure */}
            <tr className="bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Confirm</button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Confirm</button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Confirm</button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetailsPage;
