import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div className="container mx-auto px-3">
            <Navbar></Navbar>
            <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100 my-20 rounded-xl">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <p className="btn px-8 py-3 font-semibold rounded bg-blue-300 hover:bg-blue-400"><Link to={'/'}>Back to homepage</Link></p>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;