import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductDetailstext from './ProductDetailstext'
import { toast } from 'react-hot-toast';
import { addFavourite } from '../utiles/localStorage';
import { key } from 'localforage';

// const notify = () => toast.success('Successfully added you Item.');


export default function ProductDetails() {
  const {product_id} = useParams()
  // console.log(product_id);
  const number = parseInt(product_id)
  const data = useLoaderData()
  const [isFavourite, setIsfavourite] = useState(false)
  const ans = data.find(product => (  product.product_id === number))
  // console.log(ans);
  const {product_image,price,Specification,rating,product_title} = ans
  const handleAddToFaourite = ans => {
    addFavourite(ans)
  }
  return (
    
    <div>
      <ProductDetailstext />
      <div className="hero bg-base-200 h-[90vh]">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product_image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl font-bold">{product_title}</h1>
     <p>Price: ${price}</p>
     <button className='btn btn-accent rounded-3xl'>in stock</button>
     <h1 className='text-2xl my-2'>Specification </h1>
      <ul className="text-sm">
        {
          Specification.map((item,index) => <li key={index} >{item}</li>)
        }
      </ul>
      <h2>Rating <i class="fa-solid fa-star text-yellow-300"></i></h2>
      <h1 className='text-yellow-500'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>{rating}</h1>
          <div className='flex gap-3 my-4'>
          <button onClick={() => handleAddToFaourite(ans)} className='btn bg-purple-600 text-white rounded-3xl '>
          Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          <button><a href=""><i class="fa-regular fa-heart"></i></a></button>
          </div>
    </div>
  </div>
</div>
      

    </div>
  )
}
