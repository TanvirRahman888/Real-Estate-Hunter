import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const { id } = useParams();
    const properties = useLoaderData();
    console.log(id, properties);

    useEffect(()=>{
        document.title="Home Hunter | Property Details"
    },[])

    const property = properties.find(property => property.id == id);
    console.log(property);
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = property || {};


    return (
        <div className="p-5 rounded-xl bg-slate-200 my-5">
            <img className="rounded-xl w-full mb-4" src={image} alt="" />
            <h2 className="mb-2text-3xl font-bold">{estate_title}</h2>
            <h3 className="mb-2">{segment_name}</h3>
            <h3 className="mb-2">{description}</h3>
            <h3 className="mb-2">Price : {price}</h3>
            <div className="flex gap-4">
                <h3 className="mb-2">For #{status}</h3>
                <h3 className="mb-2">{area}</h3>
            </div>
            <h3 className="mb-2">{location}</h3>
            <h3 className="mb-2 flex gap-2">{facilities.map((facilitiy, idx) => <p key={idx} className="">#{facilitiy}</p>)}</h3>

        </div>
    );
};

export default PropertyDetails;