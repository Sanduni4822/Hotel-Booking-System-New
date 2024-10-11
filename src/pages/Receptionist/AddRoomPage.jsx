import React, { useState } from 'react';

const AddRoomPage = () => {
  const [formData, setFormData] = useState({
    roomName: '',
    type: '',
    feespernight: '',
    maxCount: '',
    description: '',
    imageUrl1: '',
    imageUrl2: '',
    imageUrl3: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data: ', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Room</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="roomName"
            placeholder="Room Name"
            value={formData.roomName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="fespernight"
            placeholder="Fees per ngiht"
            value={formData.feespernight}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="maxCount"
            placeholder="Max Count"
            value={formData.maxCount}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="imageUrl1"
            placeholder="Image URL 1"
            value={formData.imageUrl1}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="imageUrl2"
            placeholder="Image URL 2"
            value={formData.imageUrl2}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="imageUrl3"
            placeholder="Image URL 3"
            value={formData.imageUrl3}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="col-span-2 mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition w-full"
          >
            Add Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoomPage;
