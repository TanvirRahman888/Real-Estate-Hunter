import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {registerUser, updateUserProfile}=useContext(AuthContext)


    const location = useLocation();
    const navigate = useNavigate()

    useEffect(()=>{
        document.title="Home Hunter | Register"
    },[])

    const handelRegisterForm = (e) => {
        e.preventDefault();
        console.log("object");
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        console.log(name, photoURL, email, password);

        //Create User
        registerUser(email, password)
        .then((result) => {
            // Signed up 
            updateUserProfile(name,photoURL )
            console.log(result.user);
            toast("Registration Successful!");
            navigate(location?.state ? location.state : '/')

            // ...
          })
          .catch((error) => {
            console.error(error)
            toast("Use another Email and Password!");
            // ..
          });
        // window.location.reload()
    }
    return (
        <div>
            <div className="max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 w-1/2 bg-slate-100 mx-auto my-32">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handelRegisterForm} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <div className=" relative"> <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600" />
                            <div onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4">
                                {
                                    showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                }
                            </div>
                        </div>

                    </div>
                    <button className="bg-blue-200 hover:bg-blue-300 font-bold text-lg py-3 block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                <p className="text-center sm:px-6">Already have an account?
                    <Link to={'/login'} className="underline ml-3 btn btn-success">Log In</Link>
                </p>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;