import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import ShowAlitem from "../components/ShowAlitem";
import Two from "../components/two";

export default function Home() {
  const data = useLoaderData();
  return (
    <div>
      <div className="bg-purple-600 text-white rounded-2xl ">
        <Two />  
      </div> 
      <div className="flex ">
        <div className= "border-2 border-red-600 w-[20%] gap-10">
        <NavLink ><button className="btn btn-outline btn-accent w-[160px]">All Product</button></NavLink>
        <NavLink to={`/laptop`} ><button className="btn btn-outline btn-accent w-[160px]">Laptop</button></NavLink>
        <NavLink ><button className="btn btn-outline btn-accent w-[160px]">Phones</button></NavLink>
        <NavLink to={`/accessories`} ><button className="btn btn-outline btn-accent w-[160px] ">Accessories</button></NavLink>
        <NavLink ><button className="btn btn-outline btn-accent w-[160px]">Mac Book</button></NavLink>
        <NavLink ><button className="btn btn-outline btn-accent w-[160px]">Smart Watch</button></NavLink>
  
        </div>
        <div className=  " grid lg:grid-cols-3">
          {data.map((item) => (
            <ShowAlitem key={item.product_id} loadData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
