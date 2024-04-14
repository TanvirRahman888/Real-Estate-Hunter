import { useEffect, useState } from "react";
import Property from "../Property/Property";

const Properties = () => {
    const [ property, setProperty ] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, [])
   
    
    return (
        <div>
            <p className="text-3xl">All Properties {property.length}</p>
            {
                property.map(property=><Property key={property.id} property={property}></Property>)
            }
        </div>
    );
};

export default Properties;