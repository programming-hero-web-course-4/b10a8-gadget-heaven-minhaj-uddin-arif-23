import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function DashBoardHeading() {

  return (
    <div>
      <div className='text-center bg-purple-600 my-10 p-10 text-white rounded-2xl'>
        <h1 className='text-4xl '>Dashboard</h1>
        <p> You can see details each product</p>
        <div className='flex ml-[420px] my-5 mb-10 gap-6'>
          <NavLink to={`/dashBoard`} className={(e) => {return e.isActive?"text-3xl":""}}>
            <button className='btn'>Cart</button>
          </NavLink>
          <NavLink to={`/dashBoard`} className={(e) => {return e.isActive?"text-3xl":""}}>
            <button className='btn'>Wishlist</button>
          </NavLink>
          
        </div>

      </div>
    </div>
  )
}
