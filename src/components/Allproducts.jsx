import React from "react";
import { Link } from "react-router-dom";

export default function Allproducts({ loadData }) {
  const { product_image, product_title, price, product_id, category } =
    loadData || {};
  console.log(loadData);
  return (
    <>
     
      <div>
        <div className="card  w-[280px] shadow-2xl my-3 px-4 py-3 ">
          <figure className="w-full h-44 overflow-hidden p-5 rounded-2xl">
            <img src={product_image} className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>Price ${price}</p>
            <Link to={`/product/${product_id}`} className="">
              <button className="btn btn-outline rounded-3xl  ">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
