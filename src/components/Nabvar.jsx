import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nabvar() {
  return (
    <div className="navbar bg-purple-600 rounded-xl text-white ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none" 
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <NavLink to={`/`} className={(e) => {return e.isActive? "red":""}} ><li>Home</li></NavLink>
        <NavLink to={`/statistics`} className={(e) => {return e.isActive? "red":""}} ><li>Statistics</li></NavLink>
        <NavLink to={`/dashBoard`} className={(e) => {return e.isActive? "red":""}} ><li>Dashborad</li></NavLink>
        <NavLink to={`/execories`} className={(e) => {return e.isActive? "red":""}} ><li>Accessories</li></NavLink>
        </ul>
      </div>
      <NavLink to={`/`} className="btn btn-ghost text-sm">Gadget Heaven</NavLink>
    </div>
    <div className="navbar-center invisible lg:visible lg:flex">
      <ul className="menu menu-horizontal px-1 text-sm font-semibold gap-6">
        <NavLink to={`/`} className={(e) => {return e.isActive? "text-black":""}} ><li>Home</li></NavLink>
        <NavLink to={`/statistics`} className={(e) => {return e.isActive? "text-black":""}} ><li>Statistics</li></NavLink>
        <NavLink to={`/dashBoard`} className={(e) => {return e.isActive? "text-black":""}} ><li>Dashborad</li></NavLink>
        {/* <NavLink to={`/execories`} className={(e) => {return e.isActive? "bg-red-500":""}} ><li>Accessories</li></NavLink> */}
      </ul>
    </div>
    <div className="navbar-end gap-4 p-1">
      <a className=""><i class="fa-solid fa-cart-plus"></i></a>
      <a href=""><i class="fa-regular fa-heart"></i></a>
    </div>
  </div>
  )
}
