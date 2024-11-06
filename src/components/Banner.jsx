import React from 'react'

import image from "../assets/banner.jpg"
export default function Banner() {
  return (
    <div>
       <div className=' mb-64 '>
        <img src={image} className='w-[750px] rounded-xl border-2 border-gray-300 p-2 absolute top-80 ml-96 h-96 ' alt="" />
     </div>
    </div>
  )
}
