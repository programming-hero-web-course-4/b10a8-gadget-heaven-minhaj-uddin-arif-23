import React from 'react'

import image from "../assets/banner.jpg"
export default function Banner() {
  return (
    <div>
       <div className=' mb-72'>
        <img src={image} className='w-[700px] rounded-xl absolute top-80 ml-44' alt="" />
     </div>
    </div>
  )
}
