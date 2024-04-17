import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import AllProperty from "../Components/AllProperty/AllProperty";
import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import PrivateRouts from "./PrivateRouts";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import Contact from "../Components/Contact/Contact";
import UserProfile from "../Components/UserProfile/UserProfile";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allproperty',
            loader: ()=>fetch('/data.json'),
            element:<AllProperty></AllProperty>
        },
        {
            path:'/property/:id',
            loader: ()=>fetch('/data.json'),
            element:<PrivateRouts><PropertyDetails></PropertyDetails></PrivateRouts>
        },
        {
            path:'/UpdateProfile',
            element:<PrivateRouts><UpdateProfile></UpdateProfile></PrivateRouts>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/userprofile',
            element:<PrivateRouts><UserProfile></UserProfile></PrivateRouts>
        },
      ]
      
     
    },
  ]);

  export default router
