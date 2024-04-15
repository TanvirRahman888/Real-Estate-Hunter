import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Properties from "../Properties/Properties";
import OurProperties from "../OurProperties/OurProperties";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <OurProperties></OurProperties>
            <Properties></Properties>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;