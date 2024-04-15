import { GrLocationPin } from "react-icons/gr";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Property = ({ property }) => {
    const { id, estate_title, segment_name, price, status, area, location,  image } = property;
    return (
        <div className="border-2 m-3 rounded-lg flex flex-col gap-3 bg-blue-50 p-3 flex-grow">
            <div className="flex-grow">
                <img src={image} alt="" className="rounded-t-lg flex-grow w-full" />
            </div>
            <h3 className="text-xl font-semibold flex-grow">{estate_title}</h3>
            <h3 className="text-sm font-semibold flex-grow">{segment_name}</h3>
            <h3 className="text-xl font-semibold">Price : <span className="text-sm"> {price}</span></h3>
            <div className="flex gap-3 items-center">
                <h3 className="text-base font-semibold">For <span className="text-sm"> #{status}</span></h3>
                <h3 className="text-xl font-semibold"><span className="text-sm"> {area}</span></h3>
            </div>
            <div className="flex gap-1 items-center">
                <GrLocationPin className="text-blue-800" />
                <h3 className="text-xl font-semibold flex-grow"><span className="text-sm"> {location}</span></h3>
            </div>
            
            <Link to={`/property/${id}`}><p className="btn btn-info max-w-[340px]"> View Details </p></Link>


        </div>
    );
};

export default Property;

Property.propTypes={
    property: PropTypes.object,
}