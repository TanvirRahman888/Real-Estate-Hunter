import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext=createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)

    const registerUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        user,
        registerUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;