import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowAlitem from '../components/ShowAlitem'
import Two from '../components/two'

export default function Home() {



  const data = useLoaderData()
  return (
    

    <div>
      <div className='bg-purple-600 text-white rounded-2xl '>
      <Two />
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12'>
            {
              data.map(item => <ShowAlitem key={item.product_id} loadData={item} />)
            }
          </div>
    </div>
  )
}
