import React, { useState } from "react";

const DateFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [dateRangeType, setDateRangeType] = useState("Early");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState([]);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleDateRangeTypeChange = (type) => {
    setDateRangeType(type);
  };

  const handleDateClick = (date) => {
    // Toggle the selected date
    setSelectedDates((prev) => 
      prev.includes(date) ? prev.filter(d => d !== date) : [...prev, date]
    );
  };

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
      if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
      if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
    }
  };

  const clearFilter = () => {
    setSelectedFilter("Today"); // Reset to "Today" instead of null
    setDateRangeType("Early");
    setSelectedDates([]);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = [...Array(daysInMonth).keys()].map((i) => i + 1);

  return (
    <div className="flex p-4 bg-white rounded-lg ">
      {/* Sidebar Filters */}
      <div className="w-1/4">
        <h2 className="font-bold text-lg mb-4">Filter bookings by date</h2>
        <ul>
          {["Today", "Yesterday", "This Week", "Last Week", "This Month", "Last Month"].map((filter) => (
            <li
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`cursor-pointer mb-2 p-2 rounded ${selectedFilter === filter ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {filter}
            </li>
          ))}
        </ul>
        {/* Additional Days options */}
        <div className="mt-4">
          <button className="block w-full bg-gray-100 p-2 rounded mb-2">days up to today</button>
          <button className="block w-full bg-gray-100 p-2 rounded">days starting today</button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="w-3/4 pl-4">
        <div className="flex items-center justify-between mb-4">
          {/* Date Range Type */}
          <div className="flex space-x-2">
            <button
              onClick={() => handleDateRangeTypeChange("Early")}
              className={`px-4 py-2 border rounded ${dateRangeType === "Early" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              Early
            </button>
            <button
              onClick={() => handleDateRangeTypeChange("Continuous")}
              className={`px-4 py-2 border rounded ${dateRangeType === "Continuous" ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              Continuous
            </button>
          </div>

          {/* Month and Year Selector */}
          <div className="flex items-center space-x-2">
            <button onClick={() => handleMonthChange("prev")} className="text-gray-500 hover:text-gray-700">
              &lt;
            </button>
            <span>
              {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
            </span>
            <button onClick={() => handleMonthChange("next")} className="text-gray-500 hover:text-gray-700">
              &gt;
            </button>
          </div>

          {/* Clear Filter Button */}
          <button onClick={clearFilter} className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-600">
            Clear Filter
          </button>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-bold">
              {day}
            </div>
          ))}

          {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`p-2 ${selectedDates.includes(day) ? "bg-blue-500 text-white" : "bg-white text-black"} hover:bg-gray-200 rounded`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
