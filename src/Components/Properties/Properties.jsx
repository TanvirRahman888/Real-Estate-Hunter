import { useEffect, useState } from "react";
import Property from "../Property/Property";
import { Link } from "react-router-dom";

const Properties = () => {
    const [property, setProperty] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, [])


    return (
        <div>
            <p className="text-3xl text-center">Our Properties</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    property.slice(0,4).map(property => <Property key={property.id} property={property}></Property>)
                    
                }
                {/* All Property */}
                {/* {
                    property.map(property => <Property key={property.id} property={property}></Property>)
                } */}
            </div>
            <div className="flex justify-center my-6">
            <button className="bg-blue-600 hover:bg-blue-500 text-white hover:text-black font-semibold rounded-xl p-4">
                <Link to={"/allproperty"}>Show All Property</Link></button>
            </div>
        </div>
    );
};

export default Properties;