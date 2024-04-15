import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const { id } = useParams();
    const properties = useLoaderData();
    console.log(id, properties);

    const property=properties.find(property=>property.id==id);
    console.log(property);
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = property|| {};


    return (
        <div className="p-5 rounded-xl bg-slate-200 my-5">
            <img className="rounded-xl w-full mb-4" src={image} alt="" />
            <h2 className="text-3xl font-bold">{estate_title}</h2>
            <h3 className="">{segment_name}</h3>
            <h3 className="">{description}</h3>
            <h3 className="">{price}</h3>
            <h3 className="">{status}</h3>
            <h3 className="">{area}</h3>
            <h3 className="">{location}</h3>
            <h3 className="">{facilities}</h3>
            
        </div>
    );
};

export default PropertyDetails;