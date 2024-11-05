import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
export default function CardItem({loadData,handleRemove}) {

const {pathname} = useLocation()
  console.log(pathname);
  const { product_image, product_title, price, product_id,category } = loadData || {};
  console.log(loadData);
  return (
    <div className="">
     
      <div className="flex my-5 ml-44 border-2 border-gray-300 rounded-lg w-[70%]">
        <figure className=" p-4 overflow-hidden border-">
          <img src={product_image} className="border-2 border-gray-100 shadow-xl" />
        </figure>
        <div className="mt-14 ml-7" >
          <h2 className="card-title">{product_title}</h2>
          <p className="my-2 font-semibold">Price ${price}</p>
          <Link to={`/product/${product_id}`}>
            <button className="btn btn-primary mb-3 ">Details</button>
          </Link>
          {
            pathname === '/dashBoard' && (
              <button onClick={() => handleRemove(product_id)}  className="btn btn-error ml-60 text-white" ><FiTrash2 /></button>
              
            )
          }
        </div>
      </div>
    </div>
  );
}
// import { FiTrash2 } from "react-icons/fi";