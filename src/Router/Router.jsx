import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import AllProperty from "../Components/AllProperty/AllProperty";

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
            element:<AllProperty></AllProperty>
        },
      ]
      
     
    },
  ]);

  export default router
