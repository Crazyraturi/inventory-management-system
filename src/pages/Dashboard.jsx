import React from "react";

const Dashboard = () => {
  return (
    <div className=" w-full h- h-full bg-pink-100 flex">
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-pink-600 text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Card: Total Products */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-lg font-semibold mb-2">
              Total Products
            </h3>
            <p className="text-2xl font-bold text-gray-800">120</p>
          </div>

          {/* Card: Total Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-lg font-semibold mb-2">
              Total Categories
            </h3>
            <p className="text-2xl font-bold text-gray-800">15</p>
          </div>

          {/* Card: Low Stock */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-pink-600 text-lg font-semibold mb-2">
              Low Stock Items
            </h3>
            <p className="text-2xl font-bold text-gray-800">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
