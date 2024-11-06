import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootLayout/RootElement";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../components/ProductDetails";
import Statistics from "../pages/Statistics";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import ShowAlitem from "../components/ShowAlitem";
import NoDataItem from "../components/NoDataItem";
import Sell from "../pages/Sell";


const routers = createBrowserRouter([
    {
      path:'/',
      element:<RootElement />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home />,
          loader:() => fetch("../category.json"),
          children:[
            {
              path:'/category/:category',
              element:<ShowAlitem />,
              loader:() => fetch("../All_fake_data.json")
            },
            {
              path:'/',
              element:<ShowAlitem />,
              loader:() => fetch("../All_fake_data.json")
            },
            {
              path:'/',
              element:<NoDataItem />,
              
            },
            
          ]
        },
       
        {
          path:'/statistics',
          element:<Statistics />,
          
        },
        {
          path:'sell',
          element:<Sell />,
         
        },
        
        {
            path:'product/:product_id',
            element:<ProductDetails />,
            loader:() => fetch("/All_fake_data.json")
        },
       
        {
          path:'/dashBoard',
          element:<Dashboard />,
          loader:() => fetch("/All_fake_data.json"),
          children:[
            {
              path:'/dashBoard',
              element:<Cart />
            },
            {
              path:'/dashBoard/id',
              element:<Wishlist />
            }
          ]
        },
      ]
    } 
])

export {routers}