import React from "react";
import { NavLink } from "react-router-dom";
import { Eye } from 'lucide-react';
import { LayoutDashboard, PackagePlus, PackageMinus, Pencil } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#1E201E] h-screen w-[15%] text-white">
      {/* logo section */}
      <div className="flex flex-row p-2 items-center justify-center">
        <div id="logo" className="text-pink-600 font-extrabold text-2xl pt-2">
          <NavLink to="/">kriti design studio</NavLink>
        </div>
      </div>
      <div className="border-white">
        <hr />
      </div>
      {/* side menu */}
      <div className="w-full pt-2 gap-5">
        <NavLink 
          to="/" 
          className={({ isActive }) => `rounded-xl p-2 font-semibold text-xl gap-2 flex items-center ${isActive ? 'text-pink-500' : 'text-white'} hover:bg-neutral-950`}
        >
          <LayoutDashboard className="ml-3" />
          Dashboard
        </NavLink>
        <NavLink 
          to="/viewdetails" 
          className={({ isActive }) => `rounded-xl p-2 font-semibold text-xl gap-2 flex items-center ${isActive ? 'text-pink-500' : 'text-white'} hover:bg-neutral-950`}
        >
          <Eye className="ml-3" />
          View Details
        </NavLink>
        <NavLink 
          to="/addproduct" 
          className={({ isActive }) => `rounded-xl p-2 font-semibold text-xl gap-2 flex items-center ${isActive ? 'text-pink-500' : 'text-white'} hover:bg-neutral-950`}
        >
          <PackagePlus className="ml-3" />
          Add Product
        </NavLink>
        <NavLink 
          to="/removeproduct" 
          className={({ isActive }) => `rounded-xl p-2 font-semibold text-xl gap-2 flex items-center ${isActive ? 'text-pink-500' : 'text-white'} hover:bg-neutral-950`}
        >
          <PackageMinus className="ml-3" />
          Remove Product
        </NavLink>
        <NavLink 
          to="/editdetails" 
          className={({ isActive }) => `rounded-xl p-2 font-semibold text-xl gap-2 flex items-center ${isActive ? 'text-pink-500' : 'text-white'} hover:bg-neutral-950`}
        >
          <Pencil className="ml-3" />
          Edit Details
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
