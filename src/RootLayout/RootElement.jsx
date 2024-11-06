import React from "react";
import Nabvar from "../components/Nabvar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Two from "../components/Two";

export default function RootElement() {
  return (
    <>
      <div className=" p-4  ">
      <div className=" relative rounded-lg">
      {/* <Nabvar /> */}
      
      </div>
        <div className="">
          <Outlet />
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
