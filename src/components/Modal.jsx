import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({totalCost,resetCart}) {
  const navigate = useNavigate()
  const handleClose = () => {
    resetCart()
    navigate('/')
  }
  return (
    <div>
     
      <dialog id="newModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
         <div className="text-center ">
         <h1 className="text-2xl"><i class="fa-solid fa-check"></i></h1>
          <h1 className="font-bold text-2xl">Payment Successfully</h1>
          <p className="text-gray-600">Thanks for purchasing</p>
           <p>Total: {totalCost}</p>
         </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-purple-500  text-white mr-40 px-12 rounded-full" onClick={handleClose}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
