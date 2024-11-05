import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Categories({categories}) {
  const navigate = useNavigate()
  return (
    <div>
       {/*{(e) => {return e.isActive? "text-red-600":" btn"}} */}
        <div className=  "my-10 "> 
          <button  onClick={() => navigate('/')} className ="btn" >All Product</button>
          {
            categories.map(item => ( <NavLink className={({isActive}) => `${isActive? "btn btn-warning":""}`}
               to={`/category/${item.category}`}
                key={item.category}>
              <button className="btn "> 
                    {item.category} </button>
            </NavLink>))
          }
        </div>
      {/* </div> */}
    </div>
  )
}
// {item.category}