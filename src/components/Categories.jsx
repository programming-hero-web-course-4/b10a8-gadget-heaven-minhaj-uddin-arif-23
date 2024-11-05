import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ShowAlitem from './ShowAlitem'

export default function Categories({categories}) {
  const navigate = useNavigate()
  return (
    <div className=' border-2 border-red-800'>
       {/*{(e) => {return e.isActive? "text-red-600":" btn"}} */}
        <div className=" border-2 border-green-800 w-[12%] space-y-5 "> 
          <button  onClick={() => navigate('/')} className ="btn w-28" >All Products</button>
          <div className='my-4'>
          {
            categories.map(item => ( <NavLink className={({isActive}) => `${isActive? " btn-warning":""}`}
               to={`/category/${item.category}`}
                key={item.category}>
              <button className="btn w-28 my-2"> 
                    {item.category} </button>
            </NavLink>))
          }
          </div>
        </div>
        <div>
          
        </div>
      {/* </div> */}
    </div>
  )
}
// {item.category}