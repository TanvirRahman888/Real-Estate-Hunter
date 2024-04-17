
import Slider from "../Slider/Slider";
import Properties from "../Properties/Properties";
import OurProperties from "../OurProperties/OurProperties";
import Testimonial from "../Testimonial/Testimonial";
import AboutUs from "../AboutUs/AboutUs";
import { useEffect } from "react";

const Home = () => {
    useEffect(()=>{
        document.title="Home Hunter"
    },[])
    return (
        <div>
            
            <Slider></Slider>
            <OurProperties></OurProperties>
            <Properties></Properties>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
           

            
        </div>
    );
};

export default Home;