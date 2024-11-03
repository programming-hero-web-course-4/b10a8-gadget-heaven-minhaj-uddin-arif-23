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
      <div className="grid grid-cols-12 ">
        <div className= " col-span-12 grid md:col-span-3 ">
        <NavLink ><button className="btn btn-outline btn-accent">All Product</button></NavLink>
        <NavLink to={`/laptop`} ><button className="btn btn-outline btn-accent">Laptop</button></NavLink>
        <NavLink ><button className="btn btn-outline btn-accent">Phones</button></NavLink>
        <NavLink to={`/accessories`} ><button className="btn btn-outline btn-accent">Accessories</button></NavLink>
        <NavLink ><button className="btn btn-outline btn-accent">Mac Book</button></NavLink>
        <NavLink ><button className="btn btn-outline btn-accent">Smart Watch</button></NavLink>
  
        </div>
        <div className=  " col-span-12 grid grid-cols-1 md:col-span-9 md:grid-cols-2 lg:col-span-9  gap-7 my-12 border-2 border-black">
          {data.map((item) => (
            <ShowAlitem key={item.product_id} loadData={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
