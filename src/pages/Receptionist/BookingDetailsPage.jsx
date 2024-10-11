import React, { useState } from 'react';
// Handles date click
const handleDateClick = (date, setSelectedDate) => {
  setSelectedDate(date);
};

// Handles month change
const handleMonthChange = (direction, setCurrentMonth) => {
  setCurrentMonth((prevMonth) => prevMonth + direction);
};

// Handles filter type change
const handleFilterTypeChange = (type, setFilterType) => {
  setFilterType(type);
};

// Clears all filters
const clearFilter = (setSelectedDate, setFilterType, setCurrentMonth) => {
  setSelectedDate(null);
  setFilterType('Early');
  setCurrentMonth(9); // Reset to October
};
export default DateFilter;



// import React from 'react';

// const BookingDetailsPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-4xl bg-gray-800 text-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold p-4 text-center">Bookings</h2>
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="px-4 py-2 text-left">Booking Id</th>
//               <th className="px-4 py-2 text-left">User Id</th>
//               <th className="px-4 py-2 text-left">Room</th>
//               <th className="px-4 py-2 text-left">From</th>
//               <th className="px-4 py-2 text-left">To</th>
//               <th className="px-4 py-2 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-gray-600">
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//             </tr>
//             <tr className="bg-gray-700">
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//             </tr>
//             <tr className="bg-gray-600">
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//               <td className="border px-4 py-2"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BookingDetailsPage;
