import React from "react";
import Nabvar from "../components/Nabvar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

export default function RootElement() {
  return (
    <>
      <div className="w-11/12 mx-auto p-4  ">
        <Nabvar />

        <div>
          <Outlet />
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
