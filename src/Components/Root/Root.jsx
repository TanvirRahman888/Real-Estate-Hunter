import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";


const Root = () => {
    return (
        <div className="container mx-auto px-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Testimonial></Testimonial>
            <Footer></Footer>        
        </div>
    );
};

export default Root;