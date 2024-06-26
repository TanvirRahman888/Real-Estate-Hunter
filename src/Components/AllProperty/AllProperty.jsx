import { useEffect } from "react";
import Property from "../Property/Property";
import { useLoaderData } from "react-router-dom";


const AllProperty = () => {
    useEffect(()=>{
        document.title="Home Hunter | All Property"
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