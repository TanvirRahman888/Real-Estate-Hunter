import { useEffect } from "react";
import Property from "../Property/Property";
import { useLoaderData } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';


const AllProperty = () => {
    
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])

    const property = useLoaderData()

    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2">
            {
                property.map(property => <Property key={property.id} property={property}></Property>)
            }
            </div>
        </div>
    );
};

export default AllProperty;