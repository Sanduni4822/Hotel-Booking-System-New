import React, { useState } from 'react';

const EditRoom = () => {
  const [roomType, setRoomType] = useState(""); // Initially empty
  const [roomPrice, setRoomPrice] = useState(""); // Initially empty
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Edit Room</h2>

        <label className="block text-gray-700 mb-2">Room Type</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        />

        <label className="block text-gray-700 mb-2">Room Price</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          value={roomPrice}
          onChange={(e) => setRoomPrice(e.target.value)}
        />

        <label className="block text-gray-700 mb-2">Photo</label>
        <input
          type="file"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          onChange={handleFileChange}
        />

        {photo && (
          <img src={photo} alt="Room" className="w-full h-48 object-cover rounded-lg mb-4" />
        )}

        <div className="flex justify-between">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">Back</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Edit Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoom;
