import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItem, getItemwhish, removeCart2 } from "../utiles/localStorage";
import Allproducts from "./Allproducts";
import WhichlistItem from "./WhichlistItem";
// import DashBoardCard from './DashBoardCard'

export default function Cart() {
  const data = useLoaderData();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const localData = getItemwhish();
    setProduct(localData || data);
  }, [data]);


  const handleRemove2 = id => {
    removeCart2(id)
    const localData = getItemwhish();
    setProduct(localData)
  }
  return (
    <div>
      <div className="my-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Whishlist</h1>
          </div>
        </div>

        <div className="">
          {product?.map((item) => (
            <WhichlistItem
              key={item.product_id}
              loadData={item}
              handleRemove2={handleRemove2}
            ></WhichlistItem>
          ))}
        </div>
      </div>
    </div>
  );
}
