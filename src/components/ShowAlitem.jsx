import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Allproducts from './Allproducts';

export default function ShowAlitem() {
  const data= useLoaderData()
  // console.log(data);
  const {category} = useParams()
  // console.log(obj);
    const [product,setProduct] = useState([])
    useEffect(()=>{
      if(category){
        const filterByCategory = [...data].filter(
          product => product.category === category
        )
        setProduct(filterByCategory)
      }else{
        setProduct(data)
      }
     
    },[data,category])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-blue-500 w-[88%] my-3'>
     {
      product.map(item => (<Allproducts key={item.product_id} loadData={item} ></Allproducts>))
     }
 
    </div>
  )
}
//     