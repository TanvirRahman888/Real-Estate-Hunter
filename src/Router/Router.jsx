import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Properties from "../Components/Properties/Properties";
import Home from "../Components/Home/Home";

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
            path:'/properties',
            element:<Properties></Properties>
        },
      ]
      
     
    },
  ]);

  export default router
