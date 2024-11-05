import React, { useEffect, useState } from "react";
import DashBoardHeading from "../components/DashBoardHeading";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <DashBoardHeading />

      <Outlet />
    </div>
  );
}
