import React from 'react'
import '../index.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import jobeasytra from "./assets/jobeasytra.png"
import jobeasytra from "../assets/jobeasytra.png"
import { Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50"> 
      <div className="bg-gray-800 text-white shadow-md"> 
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src={jobeasytra} className="w-14 h-14" alt="Company Logo" />
            <span className="text-2xl font-semibold">JobEasy</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}
            >
              Home
            </NavLink>
            <NavLink
              to="/Jobs"
              className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/Courses"
              className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}
            >
              Courses
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white hover:text-blue-300"}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;