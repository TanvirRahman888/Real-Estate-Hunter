import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import AllProperty from "../Components/AllProperty/AllProperty";
import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allproperty',
            loader: ()=>fetch('data.json'),
            element:<AllProperty></AllProperty>
        },
        {
            path:'/property/:id',
            loader: ()=>fetch('data.json'),
            element:<PrivateRouts><PropertyDetails></PropertyDetails></PrivateRouts>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
      
     
    },
  ]);

  export default router
