import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

const Header = () => {
    const navLinks = <>
        <li><Link>Home</Link></li>       
        <li><Link>About</Link></li>               
        <li><Link to={`/login`}>Login</Link></li>               
        <li><Link to={`/signup`}>Signup</Link></li>               
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
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
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