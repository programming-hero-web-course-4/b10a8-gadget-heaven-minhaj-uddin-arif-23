import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className='text-center bg-purple-600 my-10 p-10 text-white rounded-2xl'>
        <h1 className='text-4xl '>Dashboard</h1>
        <p> You can see details each product</p>
        <div className='flex ml-[420px] my-5 mb-10 gap-6'>
          <button className='btn rounded-3xl text-purple-700'>cart</button>
          <button className='btn rounded-3xl text-purple-700'>Wishlist</button>
        </div>
      </div>
    </div>
  )
}
