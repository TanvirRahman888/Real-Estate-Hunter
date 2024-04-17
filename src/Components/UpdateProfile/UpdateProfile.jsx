import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const {updateUserProfile, setLoading}=useContext(AuthContext)

    const handelUpdateProfile = (e) => {     
        e.preventDefault()
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        console.log(name,photo);
        updateUserProfile(name,photo)
        .then(() => {
            // alert("Profile updated!");
            setLoading(false)
            toast.success("Profile updated!"); 

          })
        .catch(error=>{
            console.error(error)
        })

        
    }
    return (
        <div className="max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 w-1/2 bg-slate-100 mx-auto my-32">
            <h2 className="text-2xl text-center m-5">Update Profile</h2>
            <form onSubmit={handelUpdateProfile } className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Name</label>
                    <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Photo URL</label>
                    <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                
                <button className="bg-blue-200 hover:bg-blue-300 font-bold text-lg py-3 block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Update Profile</button>
            </form>
           
        </div>
    );
};

export default UpdateProfile;