import React from 'react'
import Nabvar from '../components/Nabvar'
import { Outlet } from 'react-router-dom'



export default function RootElement() {
  return (
    <div className='w-11/12 mx-auto p-4 '>
          <div className=''>
                <Nabvar />
               
          </div>
          <div>
            <Outlet />
          </div>
    </div>
  ) 
}
