import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootLayout/RootElement";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Two from "../components/two";
import ProductDetails from "../components/ProductDetails";

const routers = createBrowserRouter([
    {
      path:'/',
      element:<RootElement />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home />,
          loader:() => fetch("./All_fake_data.json")
        },
        {
          path:'/',
          element:<Two />,
        },
        {
            path:'product/:product_id',
            element:<ProductDetails />,
            loader:() => fetch("./All_fake_data.json")
        },
        {
          path:'/dashBoard',
          element:<Dashboard />,
          // loader:() => fetch("./All_fake_data.json")
        },
      ]
    } 
])

export {routers}