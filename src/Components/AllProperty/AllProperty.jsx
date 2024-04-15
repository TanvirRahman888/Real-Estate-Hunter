import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Property from "../Property/Property";

const AllProperty = () => {

    const [property, setProperty] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {
                property.map(property => <Property key={property.id} property={property}></Property>)
            }

        </div>
    );
};

export default AllProperty;