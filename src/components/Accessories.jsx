import React from "react";
import { useLoaderData } from "react-router-dom";

import SinleAccessories from "./SinleAccessories";

export default function Laptop() {
  const data = useLoaderData();

  return (
    <div>
      {data.map((item) => (
        <SinleAccessories key={item.product_id} loadData={item} />
      ))}
    </div>
  );
}