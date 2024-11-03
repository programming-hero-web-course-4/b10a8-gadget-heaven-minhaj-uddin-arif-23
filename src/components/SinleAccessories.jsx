import React from 'react'
import { Link } from 'react-router-dom';

export default function Sinlelaptop({loadData}) {
  const {product_image,product_title,price,product_id} = loadData || {}
  console.log(loadData);
  return (
    <div>
      <div className="card bg-base-100 w-[340px] shadow-xl">
  <figure className='w-ful h-44 overflow-hidden'>
    <img
      src={product_image}
     />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>price ${price}</p>
    <Link to={`product/${product_id}`}><button  className='btn btn-primary '>Details</button></Link>
  </div>
</div>
    </div>
  )
}
