import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="md:w-full mx-auto min-h-svh  bg-blue-50 flex pt-48 justify-center">
            <div className="">
                <h2 className="text-3xl font-bold text-center">User Profile</h2>
                <div className="flex text-xl font-semibold gap-5 border-2 my-3 px-5"> <h2>Name</h2> <h2>{user.displayName}</h2> </div>
                <div className="flex text-xl font-semibold gap-5 border-2 my-3 px-5"> <h2>Email</h2> <h2>{user.email}</h2> </div>
                <div className="flex text-xl font-semibold gap-5 border-2 my-3 items-center px-5"> <h2>Image</h2> <img src={user.photoURL} alt="" className="w-36" /> </div>
            </div>
        </div>
    );
};

export default UserProfile;