import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import ShowAlitem from "../components/ShowAlitem";
// import Two from "../components/two";
import Categories from "../components/Categories";
import Banner from "../components/Banner"
import Two from "../components/Two";
import Nabvar from "../components/Nabvar";
import { Helmet } from "react-helmet";
export default function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-gray-50">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div  className="bg-purple-600 text-white rounded-lg w-11/12 mx-auto  ">
        <Nabvar />
        <Two />  
      </div> 
     
      <div className=" top-60">
        <Banner />
      </div >
      <div className="">
        <h1 className="font-bold text-3xl text-center text-purple-600"> Explore Cutting-edge Gadget</h1>
      </div>
    <div className="w-11/12 mx-auto flex gap-6">
    <Categories categories={data} />
    
    <Outlet />
    </div>

    </div>
  );
}
