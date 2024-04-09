import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Partials/Navigation'
import { useUserContext } from './Context/User'
import axios from './Axios/Axios'

function Layout() {
  const {userInfo,setUserInfo} = useUserContext()
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default Layout
