import React from 'react'
import '../index.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import jobeasytra from "./assets/jobeasytra.png"
import jobeasytra from "../assets/jobeasytra.png"

const Navbar = () => {
  return (
    <div className='flex flex-row.. mt-1 justify-center'>
      <div>
        <img src={jobeasytra} className='w-20 h-22' alt="company Logo"/>
      </div>
      <div className='justify-center'>
        <div className='flex flex-row gap-8 text-xl'>
          <NavLink to="/" className="basis-1">Home</NavLink>
          <NavLink to="/Jobs">Jobs</NavLink>
          <NavLink to="/Courses">Courses</NavLink>
          <NavLink to="Contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
