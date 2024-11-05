import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItem } from "../utiles/localStorage";
import Allproducts from "./Allproducts";
import Modal from "./Modal";
export default function Cart() {
  const data = useLoaderData();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const localData = getItem();
    setProduct(localData || data);
  }, [data]);
  const handleSort = (sortby) => {
    if (sortby === "price") {
      const sorted = [...product].sort((a, b) => b.price - a.price);
      setProduct(sorted);
    }
  };

  // show modal
  const showModal = () => {
    const modal = document.getElementById("newModal");
  
    if(modal) modal.showModal();
  };

  return (
    <div>
      <div className="my-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-semibold">Cart</h1>
          </div>
          <div className="flex ">
            <h2 className="font-semibold mr-4 text-xl mt-2">Total Cost</h2>
            <button
              onClick={() => handleSort("price")}
              className="btn bg-purple-600 text-white"
            >
              Sort by Price
            </button>
            <button onClick={showModal} className="btn" >Purchase</button>
          </div>
        </div>
        {/* <div className='my-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     {
      product.map(item => (<Allproducts key={item.product_id} loadData={item} ></Allproducts>))
     }
 
    </div>
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {product?.map((item) => (
            <Allproducts key={item.product_id} loadData={item}></Allproducts>
          ))}
        </div>
      </div>
      <Modal />
    </div>
  );
}
