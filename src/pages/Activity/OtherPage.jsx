import React from 'react';

const OtherPage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{
        backgroundImage: `url('https://charliepauly.com/wp-content/uploads/2020/03/Koggala-Turtle-Hatchery-Sri-Lanka-%E2%80%93-A-Complete-Guide-To-Visiting-0.jpg')`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
      }}
    >
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-900 underline tracking-wider">
        Other Activities
      </h1>
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <ol className="list-decimal pl-5 space-y-6 text-lg text-gray-800">
          <li>
            <strong className="text-indigo-600">Cooking Events:</strong> Our chefs offer Sri Lankan cooking classes where you can learn to make authentic local dishes.
          </li>
          <li>
            <strong className="text-indigo-600">Seafood Dining:</strong> Galle is known for fresh seafood, and you can enjoy fine dining experiences or casual seafood barbecues.
          </li>
          <li>
            <strong className="text-indigo-600">Turtle Hatcheries:</strong> Visit nearby turtle conservation centers.
          </li>
          <li>
            <strong className="text-indigo-600">Library and Reading Rooms:</strong> Some boutique hotels have cozy reading rooms or libraries filled with books about Sri Lankan history and culture.
          </li>
          <li>
            <strong className="text-indigo-600">Private Cinema or Movie Nights:</strong> Some luxury hotels and resorts offer private movie screenings or outdoor cinema nights for guests to enjoy under the stars.
          </li>
          <li>
            <strong className="text-indigo-600">Board Games and Indoor Activities:</strong> Indoor game options like pool tables, chess, or other board games may be available for guests.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default OtherPage;
