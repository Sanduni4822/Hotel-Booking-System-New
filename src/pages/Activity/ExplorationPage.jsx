import React from 'react';

const ExplorationPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold underline text-center mb-8 text-blue-900">
        Exploration & Nature Activities
      </h1>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Card 1 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-blue-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-green-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Galle Fort</h2>
            <p className="text-gray-600 text-sm">A historic fortification in Galle, Sri Lanka, known for its architectural beauty.</p>
          </div>
        </div>
        
        {/* Card 2 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-green-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-purple-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-green-900 mb-2">Galle Lighthouse</h2>
            <p className="text-gray-600 text-sm">One of the oldest lighthouses in Sri Lanka, located at the southern end of Galle Fort.</p>
          </div>
        </div>
        
        {/* Card 3 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-purple-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-pink-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-purple-900 mb-2">National Maritime Museum</h2>
            <p className="text-gray-600 text-sm">A museum located inside Galle Fort, showcasing the maritime history of Sri Lanka.</p>
          </div>
        </div>

        {/* Card 4 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-pink-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-yellow-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-pink-900 mb-2">Dutch Reformed Church</h2>
            <p className="text-gray-600 text-sm">An ancient church built during the Dutch period, located within Galle Fort.</p>
          </div>
        </div>

        {/* Card 5 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-pink-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-yellow-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-pink-900 mb-2">Unawatuna Beach</h2>
            <p className="text-gray-600 text-sm">A beautiful sandy beach located close to Galle, perfect for relaxation and water sports.</p>
          </div>
        </div>

        {/* Card 6 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-pink-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-yellow-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-pink-900 mb-2">Koggala Lake</h2>
            <p className="text-gray-600 text-sm">A large scenic lake, famous for its biodiversity and birdwatching opportunities.</p>
          </div>
        </div>

        {/* Card 7 with stack effect */}
        <div className="relative group">
          <div className="absolute top-0 left-0 h-full w-full bg-pink-300 rounded-lg -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-yellow-300 rounded-lg -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-lg z-10">
            <h2 className="text-lg font-semibold text-pink-900 mb-2">Fortifications and Ramparts</h2>
            <p className="text-gray-600 text-sm">Explore the ancient walls and fortifications of Galle Fort, offering stunning views.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExplorationPage;
