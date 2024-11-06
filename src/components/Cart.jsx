import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { getItem, removeCart } from "../utiles/localStorage";
import Allproducts from "./Allproducts";
import Modal from "./Modal";
import CardItem from "./CardItem";
export default function Cart() {

  // const {pathname} = useLocation()
  // console.log(pathname);
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

  const totalCost = product.reduce((acc,item) => acc + item.price,0);
  console.log(totalCost);

  // show modal
  const showModal = () => {
    const modal = document.getElementById("newModal");
  
    if(modal) modal.showModal();
  };

  const handleRemove = id => {
    removeCart(id)
    const localData = getItem();
    setProduct(localData)
  }
  const resetCart = () => {
    localStorage.clear()
    setProduct([])
  }

  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-4xl font-semibold">Cart</h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h2 className="font-semibold mr-4 text-xl mt-2">Total Cost $ {totalCost}</h2>
            <button
              onClick={() => handleSort("price")}
              className="btn rounded-3xl hover:bg-purple-500  btn-outline mr-5"
            >
              Sort by Price
            </button>
            {/* disabled={isFavourite} */}
            <button disabled={product.length === 0} onClick={showModal} className={`btn rounded-full ${product.length === 0?"text-gray-500":"text-black"}`}>Purchase</button>
          </div>
        </div>
     
        <div className="mt-10">
          {product?.map((item) => (
            <CardItem handleRemove={handleRemove} key={item.product_id} loadData={item}></CardItem>
          ))}
        </div>
      </div>
      <Modal totalCost={totalCost} resetCart={resetCart}/>
    </div>
  );
}
