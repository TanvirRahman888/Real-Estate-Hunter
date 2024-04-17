import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Testimonial = () => {
    // -----------------------------

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="my-16 border-2 p-5 rounded-2xl">
            <div><h2 className="text-2xl text-center font-bold my-5">Happy Customers</h2></div>
            <Carousel responsive={responsive}>
                    <div className="card w-96 bg-base-100 border-2 p-4">
                        <figure><img src="https://mygate.com/wp-content/uploads/2023/07/110.jpg"  className='h-[280px]' alt="Shoes" /></figure>
                        <div className="">
                            <h2 className="card-title">Sarah Johnson</h2>
                            <p>I had a wonderful experience working with Mark Anderson from ABC Realty. Mark was incredibly knowledgeable about the local market and helped me find the perfect condo. He was patient, responsive, and negotiated a great deal for me. I highly recommend Mark and ABC Realty!</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 border-2 p-4">
                        <figure><img src="https://i.pinimg.com/originals/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg" className='h-[280px]' alt="Shoes" /></figure>
                        <div className="">
                            <h2 className="card-title">Lisa Johnson</h2>
                            <p>Tom Williams at 123 Homes Realty helped us find our dream home in a competitive market. Tom was attentive to our needs, provided excellent guidance, and was always available to answer our questions. His negotiation skills were impressive, and we could not be happier with our new home. Thank you, Tom and 123 Homes Realty!</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 border-2 p-4">
                        <figure><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6" className='h-[280px]' alt="Shoes" /></figure>
                        <div className="">
                            <h2 className="card-title">Michael Chang</h2>
                            <p>I recently purchased an investment property with the help of Sarah Lee from Sunshine Real Estate. Sarah was proactive in finding suitable properties and provided valuable insights into the rental market. She made the entire process efficient and stress-free. I highly recommend Sarah and Sunshine Real Estate for all your real estate needs.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 border-2 p-4">
                        <figure><img src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg" className='h-[280px]' alt="" /></figure>
                        <div className="">
                            <h2 className="card-title">Emily Thompson</h2>
                            <p>Working with Alex Johnson at Dream Home Realty was a fantastic experience. Alex understood exactly what I was looking for in a home and was diligent in finding options that matched my criteria. He was patient, professional, and guided me through every step of the home-buying process. I am thrilled with my new home and grateful to Alex and Dream Home Realty for their exceptional service.</p>
                        </div>
                    </div>
                   
            </Carousel>
        </div>
    );
};

export default Testimonial;