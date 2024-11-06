import React from 'react'

import image from "../assets/banner.jpg"
export default function Banner() {
  return (
    <div>
       <div className=' mb-96'>
        <img src={image} className='w-[700px] rounded-xl absolute top-80 ml-60 ' alt="" />
     </div>
    </div>
  )
}
