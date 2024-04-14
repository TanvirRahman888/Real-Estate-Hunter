import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Properties from "../Properties/Properties";
import OurProperties from "../OurProperties/OurProperties";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <OurProperties></OurProperties>
            <Properties></Properties>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;