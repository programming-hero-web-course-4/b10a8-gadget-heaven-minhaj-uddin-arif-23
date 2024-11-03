import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductDetailstext from './ProductDetailstext'
import { toast } from 'react-hot-toast';

const notify = () => toast.success('Successfully added you Item.');
/*
"product_id": 313,
    "product_title": "Apple MacBook Air (M1) - 256GB",
    "product_image": "https://i.ibb.co.com/fr2Hv2f/mac1.jpg",
    "category": "Laptops",
    "price": 1299,
    "description": "Apple MacBook Air with M1 chip, 8GB RAM, and 256GB SSD.",
    "Specification": [
      "Processor: Apple M1",
      "RAM: 8GB",
      "Storage: 256GB SSD",
      "Display: 13.3 inches Retina"
    ],
    "availability": true,
    "rating": 4.9
*/

export default function ProductDetails() {
  const {product_id} = useParams()
  // console.log(product_id);
  const number = parseInt(product_id)
  const data = useLoaderData()
  const ans = data.find(product => product.product_id === number)
  // console.log(ans);
  const {product_image,price,Specification,rating,product_title} = ans
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
          Specification.map(item => <li key={item.product_id} >{item}</li>)
        }
      </ul>
      <h2>Rating <i class="fa-solid fa-star text-yellow-300"></i></h2>
      <h1 className='text-yellow-500'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>{rating}</h1>
          <div className='flex gap-3 my-4'>
          <button onClick={notify} className='btn bg-purple-600 text-white rounded-3xl '>
          Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          <button><a href=""><i class="fa-regular fa-heart"></i></a></button>
          </div>
    </div>
  </div>
</div>
      

    </div>
  )
}
