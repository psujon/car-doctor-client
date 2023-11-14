import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    const navLinks = <>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/about`}>About</Link></li>
        {
            user?.email ? <>
                <li><Link to={`/bookings`}>My Bookings</Link></li>
                <li><Link onClick={handleLogout}>Logout</Link></li>
            </>
                :
                <>

                    <li><Link to={`/login`}>Login</Link></li>
                    <li><Link to={`/signup`}>Signup</Link></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar h-24 bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <img src={logo} alt="" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-warning">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;