import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allproperty">Properties</Link></li>
        <li><Link to={'/UpdateProfile'}>Update Profile</Link></li>
        {/* <li><Link>User Profile</Link></li> */}
        <li><Link to={'/contact'}>Contact Us</Link></li>
    </>

    // const userPhoto= user.photoURL || "https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* <a className="font-bold text-xl"><span className="text-3xl text-blue-500">H</span>ome <span className="text-3xl text-blue-500">H</span>unter</a> */}
                <div className="w-20"><Link to={'/'}><img src="../../../public/logo.jpg" alt="" /></Link></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-xl">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center">
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div className="h-12 w-12 m-2 rounded-lg p-1 border-2 border-green-500"> <img src={user.photoURL} alt="" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                    <li><a>{user.displayName}</a></li>
                                    <li><Link to={'/UpdateProfile'}>Update Profile</Link></li>
                                </ul>
                            </div>
                            <Link to={'#'} onClick={handelLogOut}> <a className="btn btn-warning font-bold text-xl">Log Out</a> </Link>
                        </div>
                        :
                        <Link to={'/login'}> <a className="btn font-bold text-xl">Get Access</a> </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;