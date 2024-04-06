import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Partials/Navigation'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default Layout
