const Property = ({property}) => {
    const {id,estate_title,segment_name, description,price, status,  area, location,facilities, image, button   }=property;
    return (
        <div>
            {/* <p className="text-3xl">Property</p> */}
            {estate_title} <br />
            {segment_name}
        </div>
    );
};

export default Property;