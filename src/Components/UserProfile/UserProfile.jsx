import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        
        <div>
            <h2>User Profile</h2>
            <p>{user.displayName}</p>
            <div> <h2>Name</h2> <h2>{user.displayName}</h2> </div>
            <div> <h2>Email</h2> <h2>{user.email}</h2> </div>
            <div> <h2>Image</h2> <img src={user.photoURL} alt="" /> </div>
            <div> <h2>Name</h2> <h2>{user.displayName}</h2> </div>
        </div>
    );
};

export default UserProfile;