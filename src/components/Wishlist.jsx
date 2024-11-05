
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getItem } from '../utiles/localStorage'
import Allproducts from './Allproducts'
import WhichlistItem from './WhichlistItem'
// import DashBoardCard from './DashBoardCard'

export default function Cart() {

  const data = useLoaderData()

  const [product, setProduct] = useState([])
  useEffect(() =>{
    const localData = getItem()
    setProduct(localData || data)
  },[data])
  const handleSort = sortby =>{
    if(sortby === 'price'){
      const sorted= [...product].sort((a,b) => b.price -a.price )
      setProduct(sorted)
    }
  }

  return (
    <div>
       <div className='my-10'>
  <div className='flex justify-between'>
  <div>
        <h1 className='text-2xl font-semibold'>Whishlist</h1>
      </div>
  
  </div>
    
      <div className=''>
     {
      product?.map(item => (<WhichlistItem key={item.product_id} loadData={item} ></WhichlistItem>))
     }
 
    </div>
  </div>
  </div>
  )
}
