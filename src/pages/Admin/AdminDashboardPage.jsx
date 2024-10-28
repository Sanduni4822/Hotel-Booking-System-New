import React from 'react';

const AdminDashboardPage = ({ users, handleDelete }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-2/3 bg-white rounded-lg shadow-md p-6 mt-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Users Management Page</h1>

        <button className="w-full bg-blue-600 text-white py-2 px-4 mb-4 rounded-md hover:bg-blue-700">
          Add User
        </button>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 py-2 px-4">ID</th>
              <th className="border-b-2 py-2 px-4">User Name</th>
              <th className="border-b-2 py-2 px-4">Email</th>
              <th className="border-b-2 py-2 px-4">Role</th>
              <th className="border-b-2 py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 mr-2">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
