import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavigator from './Partials/AdminNavigator'

function AdminLayout() {
  return (
    <div>
        <AdminNavigator/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout
