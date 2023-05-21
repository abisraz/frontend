import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbaradmin from './Navbaradmin'

const Admin = () => {
  return (
    <div>
        <Navbaradmin />
        <Outlet />
    </div>
  )
}

export default Admin