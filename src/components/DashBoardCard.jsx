import React from 'react'

export default function DashBoardCard() {
  return (
    <div className='my-10 flex justify-between'>
      <div className=''>
        <h1 className='text-xl font-semibold'>Cart</h1>
      </div>
      <div className='flex'>
        <h2 className='font-semibold mr-4 text-xl mt-2'>Total Cost</h2>
        <button className='btn bg-purple-600 text-white'>Sort by Price</button>
        <button className='btn bg-purple-600 text-white'>Purchase</button>
      </div>
    </div>
  )
}
