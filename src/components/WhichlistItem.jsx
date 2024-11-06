import React from 'react'
import { addFavourite, addToWhishlist } from '../utiles/localStorage';

export default function WhichlistItem({loadData}) {
  const { product_image, product_title, price, product_id,category } = loadData || {};
  // console.log(loadData);
  const handleAddToWhichList= loadData => {
    addToWhishlist(loadData)
  }
  return (
    <div className="">
     
      <div className="flex my-5 ml-44 border-2 border-gray-300 rounded-lg w-[70%]">
        <figure className=" p-4 overflow-hidden border-">
          <img src={product_image} className="border-2 border-gray-100 shadow-xl" />
        </figure>
        <div className="mt-14 ml-7" >
          <h2 className="card-title">{product_title}</h2>
          <p className="my-2 font-semibold">Price ${price}</p>
         
          <button onClick={() => handleAddToWhichList(loadData)} className='btn bg-purple-600 text-white rounded-3xl '>
          Add to cart <i class="fa-solid fa-cart-plus"></i></button>
          
        </div>
      </div>
    </div>
  );
}
