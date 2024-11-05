import React, { useEffect, useState } from 'react'
import DashBoardHeading from '../components/DashBoardHeading'
// import Nabvar from '../components/Nabvar'
import DashBoardCard from '../components/DashBoardCard'
import { Outlet } from 'react-router-dom'


export default function Dashboard() {
 
  return (
    <div> 
      <DashBoardHeading />
      
      <DashBoardCard />
    
        <Outlet/>
    </div>
  )
}
