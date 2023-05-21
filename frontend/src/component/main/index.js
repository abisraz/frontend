import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import BrowseEquipments from './BrowseEquipments'

const Main = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
   
    </div>
  )
}

export default Main