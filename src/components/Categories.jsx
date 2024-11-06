import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShowAlitem from "./ShowAlitem";

export default function Categories({ categories }) {
  const navigate = useNavigate();

  return (
    <div className=" mt-20 w-[13%] bg-white p-3 h-[450px] rounded-xl">
      {/*{(e) => {return e.isActive? "text-red-600":" btn"}} */}
      <div className=" w-[12%] space-y-5 ">
        <NavLink
          className={({ isActive }) => `${isActive ? " btn-accent " : ""}`}
          to={`/`}
        > 
          <button className="btn w-28 my-2"> ALl Products</button>
        </NavLink>
        <div className="my-4">
          {categories.map((item) => (
            <NavLink
              className={({ isActive }) => `${isActive ? " btn-accent " : ""}`}
              to={`/category/${item.category}`}
              key={item.category}
            >
              <button className="btn w-28 my-2">{item.category} </button>
            </NavLink>
          ))}
        </div>
      </div>
      <div></div>
      {/* </div> */}
    </div>
  );
}
// {item.category}
