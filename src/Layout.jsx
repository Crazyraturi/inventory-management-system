import React from 'react';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen h-screen bg-pink-100 flex">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
