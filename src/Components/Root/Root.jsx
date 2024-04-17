import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Root = () => {
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])
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