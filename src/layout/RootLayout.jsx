import React from 'react'
import { Outlet } from 'react-router'
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default RootLayout