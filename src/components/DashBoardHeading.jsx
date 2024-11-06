import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Nabvar from './Nabvar'

export default function DashBoardHeading() {
const {pathname} = useLocation()
  return (
    <div className="">
      <div className='text-black'>
        <Nabvar />
      </div>
      <div className='text-center bg-purple-600 my-5 p-10 text-white  w-[100%] '>
        <h1 className='text-4xl font-semibold'>Dashboard</h1>
        <p> You can see details each product</p>
        <div className='flex ml-[470px] my-5 mb-10 gap-6'>
          <NavLink to={`/dashBoard`} className={({isActive}) => `${(isActive && !pathname.includes("id") )?  "btn-info  ":""}`}>
            <button className='btn rounded-full'>Cart</button>
          </NavLink>
          <NavLink to={`/dashBoard/id`} className={({isActive}) => `${isActive? "btn-info":""}`}>
            <button className='btn rounded-full'>Wishlist</button>
          </NavLink>
          
        </div>

      </div>
    </div>
  )
}
