import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Navbar = () => {
    const { currentUser, handleLogout } = useContext(AuthContext);

    const logoutUserFunc = () => {
        handleLogout()
            .then(() => { console.log('user is logged out') })
            .catch((error) => { console.log(error) })
    }





    const navItems = <>
        <li className="lg:mr-2"><NavLink to='/all/users'>All User</NavLink></li>
        <li className="lg:ml-2"><NavLink >Create form</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 lg:w-[1280px] lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {
                        currentUser ? <>
                            <img className="w-12 block lg:hidden rounded-2xl" src={currentUser?.photoURL} alt="" />
                            <div tabIndex={0} role="button" className="btn m-1 hidden lg:block">
                                <img className="w-12 rounded-2xl mt-[5px]" src={currentUser?.photoURL} alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52 hidden lg:block">
                                <li onClick={logoutUserFunc}><a>Log out</a></li>
                            </ul>

                        </>
                            :
                            <>
                                <NavLink to='/signup'>Sign Up</NavLink>
                            </>
                    }

                </div>
                <span className="ml-5">{currentUser?.displayName}</span>
            </div>
        </div>
    );
};

export default Navbar;