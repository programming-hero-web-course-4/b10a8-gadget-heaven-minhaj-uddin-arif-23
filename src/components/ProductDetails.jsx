import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductDetailstext from './ProductDetailstext'
import { toast } from 'react-hot-toast';
import { addFavourite, addToWhishlist } from '../utiles/localStorage';
import Nabvar from './Nabvar';


const notify = () => toast.success('You add to WishList item.');


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
  const handleAddWhichList = ans => {
    addToWhishlist(ans)
  }
  const [count, setCount] = useState(0)
  const [count1, setCoun12] = useState(0)
  function handleclick(){
    setCount(count + 1)
    console.log(count);
  }
  function handleclick2(){
    setCoun12(count1 + 1)
    console.log(count1);
  }
  return (
    
    <div>
      {/* <Nabvar count={count} /> */}
      <div className=''>
      <ProductDetailstext />
      </div>
      <div className="absolute top-1/3  lg:ml-60  hero bg-base-100 h-[60vh] w-[700px] ml-48 rounded-xl shadow-2xl">
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
          <div className='flex gap-3  '>
          <button onClick={() =>{
            handleAddToFaourite(ans)
            handleclick()
            }} className='btn bg-purple-600 text-white rounded-3xl  '>
          Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          <button
           onClick={() => {
            handleAddWhichList(ans)
            handleclick2()
           }} 
          
          className=''><p><i class="fa-regular fa-heart"></i></p></button>
          </div>
    </div>
  </div>
</div>
      

    </div>
  )
}
