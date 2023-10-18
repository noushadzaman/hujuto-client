import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const navLinks = <>
        <Link to="/">
            <button className="button">
                <span>&nbsp;Home&nbsp;</span>
                <span className="hover-text">&nbsp;Home&nbsp;</span>
            </button>
        </Link>

        <Link to="/myCart">
            <button className="button">
                <span>&nbsp;Cart&nbsp;</span>
                <span className="hover-text">&nbsp;Cart&nbsp;</span>
            </button>
        </Link>

        <Link to="/addProduct">
            <button className="button">
                <span>&nbsp;Add&nbsp;Product&nbsp;</span>
                <span className="hover-text">&nbsp;Add&nbsp;Product&nbsp;</span>
            </button>
        </Link>

        <Link to="/faq">
            <button className="button">
                <span>&nbsp;Faq&nbsp;</span>
                <span className="hover-text">&nbsp;Faq&nbsp;</span>
            </button>
        </Link>

        <Link to="/contact">
            <button className="button">
                <span>&nbsp;Contact&nbsp;</span>
                <span className="hover-text">&nbsp;Contact&nbsp;</span>
            </button>
        </Link>
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
                    <div>
                        <img src="data:image/png;base64,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"></img>
                    </div>
                    <p className="text-2xl font-semibold text-[#BFA37C]">HUJUTO</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn-primary" to="/login">
                    Log In
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;