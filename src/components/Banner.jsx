import React from 'react'

import image from "../assets/banner.jpg"
export default function Banner() {
  return (
    <div>
       <div className='mt-10'>
        <img src={image} className='w-[100px] ml-20' alt="" />
     </div>
    </div>
  )
}
