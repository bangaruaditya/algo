import React from 'react'
import '../index.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import jobeasytra from "./assets/jobeasytra.png"
import jobeasytra from "../assets/jobeasytra.png"
import { Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


// const Navbar = () => {
//   return (
//     <div className='flex felx-row mt-1'>
//         <div className='basis-1/3 ml-4'>
//           <img src={jobeasytra} className='w-18 h-20' alt="company Logo"/>
//         </div>
//         <div className='basis-1/4'>
//           <div className='flex flex-row gap-8 text-2xl mt-4'>
//             <NavLink to="/" className="basis-1">Home</NavLink>
//             <NavLink to="/Jobs">Jobs</NavLink>
//             <NavLink to="/Courses">Courses</NavLink>
//             <NavLink to="Contact">Contact</NavLink>
//           </div>
//         </div>
//       <Divider/>
//     </div>
//   )
// }
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className='bg-white text-black'>
            <div className='basis-1/3 ml-4'>
              <img src={jobeasytra} className='w-18 h-20' alt="company Logo"/>
            </div>
            <div className=''>
              <div className='flex flex-row gap-8 text-2xl'>
                <NavLink to="/" className="basis-1">Home</NavLink>
                <NavLink to="/Jobs">Jobs</NavLink>
                <NavLink to="/Courses">Courses</NavLink>
                <NavLink to="Contact">Contact</NavLink>
              </div>
            </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
