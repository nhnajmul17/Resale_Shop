import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Utils/Redux/AuthSlice/AuthSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../Utils/Firebase/firebase.config';
import { BiLogIn, BiLogOut } from 'react-icons/bi'

const Navbar = () => {

    const { name, email, userImage } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlelogout = () => {
        signOut(auth).then(() => {
            dispatch(logout())
        })

    }

    const menuItems =
        <>
            <li className='font-bold'><Link to="/">Home</Link></li>
            <li className='font-bold'><Link to="about">About</Link></li>
        </>


    return (
        <div className="navbar rounded-sm bg-transparent bg-gradient-to-r from-indigo-200 via-purple-100 to-cyan-100 sticky z-10 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost font-extrabold normal-case text-3xl">ReSale</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {userImage ? <img src={userImage} />
                                :
                                <img src="https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {name && <li className='font-bold'><Link>{name}</Link></li>}
                        {email ? <li className='font-bold'><Link onClick={handlelogout}>Logout <BiLogOut className='font-bold text-lg' /></Link></li> : <li className='font-bold'><Link to='/login' >Login <BiLogIn className='font-bold text-lg' /></Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;