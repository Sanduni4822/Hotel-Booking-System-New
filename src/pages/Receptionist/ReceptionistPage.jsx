import React from 'react';
import ReceptionistNavbar from '../../components/ReceptionistNavbarComponent/ReceptionistNavbar';

const ReceptionistPage = () => {
  return (
    <div>
      <ReceptionistNavbar/>
      {/* Add other components or content for the Receptionist page here */}
      <h1 className="text-center text-2xl font-bold mt-10">Welcome to the Receptionist Dashboard</h1>
    </div>
  );
};

export default ReceptionistPage;
