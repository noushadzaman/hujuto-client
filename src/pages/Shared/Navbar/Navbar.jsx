import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/logo.png'
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged out successfully',
            showConfirmButton: false,
            timer: 2500
        })
    }

    const navLinks = <>
        <NavLink to="/cars">
            <button className="button">
                <span>&nbsp;cars&nbsp;</span>
                <span className="hover-text">&nbsp;cars&nbsp;</span>
            </button>
        </NavLink>

        <NavLink to="/cart">
            <button className="button">
                <span>&nbsp;Cart&nbsp;</span>
                <span className="hover-text">&nbsp;Cart&nbsp;</span>
            </button>
        </NavLink>

        <NavLink to="/dashboard">
            <button className="button">
                <span>&nbsp;dashboard&nbsp;</span>
                <span className="hover-text">&nbsp;dashboard&nbsp;</span>
            </button>
        </NavLink>

        <NavLink to="/addProduct">
            <button className="button">
                <span>&nbsp;Add&nbsp;vehicle&nbsp;</span>
                <span className="hover-text">&nbsp;Add&nbsp;vehicle&nbsp;</span>
            </button>
        </NavLink>

        <NavLink to="/contact">
            <button className="button">
                <span>&nbsp;Contact&nbsp;</span>
                <span className="hover-text">&nbsp;Contact&nbsp;</span>
            </button>
        </NavLink>
    </>

    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <Link to={'/'}><img className="h-[25px]" src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {
                loading ?
                    <span className="loading loading-spinner loading-lg"></span>
                    : <div className="navbar-end">
                        {
                            user ?
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-center">
                                        <img referrerPolicy="no-referrer" className="rounded h-[40px]" src={user?.photoURL} alt="" />
                                        <p className="text-[#BFA37C] font-semibold text-center">{user?.displayName}</p>
                                    </div>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn-primary w-[140px] h-[35px] md:w-[200px] md:h-[50px]">
                                        Log out
                                    </button>
                                </div>
                                :
                                <Link to="/login"><button className="btn-primary w-[140px] h-[35px] md:w-[200px] md:h-[50px]">Log In</button></Link>

                        }
                    </div>
            }
        </nav>
    );
};

export default Navbar;