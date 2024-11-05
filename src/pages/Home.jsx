import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import ShowAlitem from "../components/ShowAlitem";
import Two from "../components/two";
import Categories from "../components/Categories";
import Banner from "../components/Banner"
export default function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div  className="bg-purple-600 text-white rounded-2xl  ">
        <Two />  
      </div> 
      <div className=" top-60">
        <Banner />
      </div>
      <Categories categories={data} />
      <Outlet />
    </div>
  );
}
