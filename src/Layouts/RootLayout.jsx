import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Divider } from '@mui/material'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
export default RootLayout;
