import React from "react";
import { useLoaderData } from "react-router-dom";
import Sinlelaptop from "./Sinlelaptop";

export default function Laptop() {
  const data = useLoaderData();

  return (
    <div>
      {data.map((item) => (
        <Sinlelaptop key={item.product_id} loadData={item} />
      ))}
    </div>
  );
}
