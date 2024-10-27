import React from 'react';

const RoomsDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Existing Rooms</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Filter Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <label htmlFor="roomTypeFilter" className="mr-2">Filter by room type:</label>
            <select id="roomTypeFilter" className="border p-2 rounded">
              <option value="">Select a room type to filter...</option>
              {/* Add more options here */}
            </select>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Clear Filter</button>
        </div>

        {/* Table Section */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Room Type</th>
              <th className="border px-4 py-2">Room Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows for visual structure */}
            <tr className="bg-gray-100">
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">View / Edit</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomsDetailsPage;
