import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div> 
        <div>Navbar</div>
        <Outlet />
        <div>Footer</div>
    </div>
  )
}

export default RootLayout