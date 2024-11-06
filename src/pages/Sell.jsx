import React from "react";
import Nabvar from "../components/Nabvar";
import { Helmet } from "react-helmet";
import image from "../assets/forsell.jpg";
import AskedQuestions from "../components/AskedQuestions";
export default function Sell() {
  return (
    <>
      <div className="bg-purple-500 text-white">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sell Products</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Nabvar />
      </div>
      <div className="flex justify-between bg-gray-100 p-9">
        <div>
          <h1 className="text-xl font-bold ml-20">Sell Gadget Heaven</h1>
        </div>
        <div>
          <p className="text-md font-semibold ">
            Get 20% back on your first $25,000 in branded sales. Learn more
          </p>
        </div>
        <div>
          <button className="btn bg-purple-600 text-white">Register</button>
        </div>
      </div>
      <div className="flex bg-gray-100 p-3">
        <div>
          <div className="mt-3 p-10 ml-36">
            <h1 className="text-5xl font-bold">
              Create an Gadget Heaven Seller Account
            </h1>
          </div>
          <div className="ml-48">
            <button className="btn bg-purple-500 text-white">Sign Up</button>
          </div>
        </div>
        <div className="mr-48 mt-8">
          <img src={image} className="w-80" alt="" />
        </div>
      </div>
     <div className="mt-20 w-11/12 mx-auto">
     <AskedQuestions />
     </div>
    </>
  );
}
