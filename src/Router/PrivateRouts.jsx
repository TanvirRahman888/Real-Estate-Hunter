import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location=useLocation();
    console.log(location.pathname);

    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouts;