import React from 'react';
import { useNavigate } from 'react-router-dom';
import barImg from '../../assets/Facilities/bar.jpg';
import FacilitiesImg from '../../assets/Facilities/Facilities.jpg';
import gymImg from '../../assets/Facilities/gym.jpg';
import restaurantImg from '../../assets/Facilities/restaurant.jpg';
import spaImg from '../../assets/Facilities/spa.jpg';
import transportImg from '../../assets/Facilities/transport.jpeg';
import laundryImg from '../../assets/Facilities/loundry.jpg';
import lobbyImg from '../../assets/Facilities/lobby.jpeg';
import parkImg from '../../assets/Facilities/park.jpg';
import poolImg from '../../assets/Facilities/pool.jpg';
import kidsplayImg from '../../assets/Facilities/kidsplay.jpg';

const FacilityPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img 
          src={FacilitiesImg} 
          className="w-full h-[400px] object-cover" 
          alt="Facilities"
        />
        <section className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
          <h1 className="text-6xl font-bold text-white">FACILITIES</h1>
          <p className="mt-4 text-2xl text-white">Experience unparalleled comfort with our premium hotel facilities.</p>
        </section>
      </div>

      {/* Facility Cards Section */}
      <section className="py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gray-100">
        {facilityData.map((facility) => (
          <FacilityCard
            key={facility.title}
            imgSrc={facility.imgSrc}
            title={facility.title}
            description={facility.description}
            navigateTo={facility.navigateTo}
            navigate={navigate}
          />
        ))}
      </section>

      {/* Common Facilities Section */}
      <section className="text-center py-8 bg-gray-800 text-white">
        <h2 className="text-4xl mb-6 font-bold">Common Facilities</h2>
        <p className="mb-7">The accommodation you should choose to spend a relaxing holiday in the beautiful city of Galle...</p>
        <div className="flex flex-wrap justify-center gap-4">
          {commonFacilities.map((facility) => (
            <CommonFacility key={facility.title} title={facility.title} imgSrc={facility.imgSrc} />
          ))}
        </div>
      </section>

      {/* Room Facilities Section */}
      <section className="text-center py-10 bg-gray-200">
        <h2 className="text-3xl mb-6 font-bold">Room Facilities</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {roomFacilities.map((facility) => (
            <RoomFacility key={facility} title={facility} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-gray-700 text-white text-center py-10">
        <h1 className="text-2xl font-bold italic mb-9">Doing the right thing at the right time.</h1>
        <div className="flex justify-center space-x-10 mb-10">
          {stats.map((stat) => (
            <StatCard key={stat.label} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

const facilityData = [
  { imgSrc: poolImg, title: "Swimming Pool", description: "Unwind in our serene swimming pool, where relaxation meets breathtaking views.", navigateTo: "/pool" },
  { imgSrc: spaImg, title: "WELLNESS SPA", description: "Relax and rejuvenate with our luxurious spa treatments.", navigateTo: "/spa" },
  { imgSrc: gymImg, title: "GYM", description: "Unleash your full potential in our state-of-the-art gym environment.", navigateTo: "/gym" },
  { imgSrc: transportImg, title: "TRANSPORT", description: "Shuttle services and car rental available for your convenience.", navigateTo: "/transport" },
  { imgSrc: barImg, title: "BAR", description: "Exclusive bar offering a wide selection of premium drinks.", navigateTo: "/bar" },
];

const commonFacilities = [
  { title: "Lobby", imgSrc: lobbyImg },
  { title: "Restaurant", imgSrc: restaurantImg },
  { title: "Parking", imgSrc: parkImg },
  { title: "Kids Play Area", imgSrc: kidsplayImg },
  { title: "Laundry Service", imgSrc: laundryImg },
];

const roomFacilities = ["Free WiFi", "Television", "Safety Locker", "Air Condition", "Private Bathroom", "Mini Bar"];

const stats = [
  { count: 5, label: "Suit Rooms" },
  { count: 15, label: "Regular Rooms" },
  { count: 40, label: "Staff" },
  { count: 8, label: "Services" },
];

const FacilityCard = ({ imgSrc, title, description, navigateTo, navigate }) => {
  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
        <button onClick={handleClick} className="mt-4 inline-block bg-gray-900 text-white py-2 px-4 rounded">
          View More Details
        </button>
      </div>
    </div>
  );
};

const CommonFacility = ({ title, imgSrc }) => (
  <div className="bg-gray-700 p-4 rounded-lg text-center w-48 transition-transform transform hover:scale-105">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <img src={imgSrc} alt={title} className="w-32 h-32 mx-auto rounded-full" />
  </div>
);

const RoomFacility = ({ title }) => (
  <div className="bg-gray-200 p-4 rounded-lg text-center w-48 mb-4">
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

const StatCard = ({ count, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold">{count}</p>
    <p>{label}</p>
  </div>
);

export default FacilityPage;

