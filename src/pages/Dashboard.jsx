import React, { useEffect, useState } from "react";
import DashBoardHeading from "../components/DashBoardHeading";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  return (
    <div className="">
      <DashBoardHeading />
      <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     <div className="w-11/12 mx-auto">
     <Outlet />
     </div>
    </div>
  );
}
