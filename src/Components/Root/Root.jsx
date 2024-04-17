import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Root = () => {
    return (
        <div className="container mx-auto px-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>        

            <ToastContainer />
        </div>
    );
};

export default Root;