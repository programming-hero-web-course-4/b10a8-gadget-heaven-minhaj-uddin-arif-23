import React from "react";
import { Link } from "react-router-dom";

export default function Allproducts({ loadData }) {
  const { product_image, product_title, price, product_id,category } = loadData || {};
  console.log(loadData);
  return (
    <div>
     
      <div className="card bg-blue-50 w-[300px] shadow-2xl my-3 ">
        <figure className="w-full h-44 overflow-hidden p-5 rounded-2xl">
          <img src={product_image} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>price ${price}</p>
          <Link to={`/product/${product_id}`}>
            <button className="btn btn-primary ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
