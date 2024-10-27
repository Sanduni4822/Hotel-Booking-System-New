import React from 'react';

const RoomsDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Existing Rooms</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
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
