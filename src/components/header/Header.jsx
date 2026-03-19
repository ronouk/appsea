import React from 'react';
import { NavLink } from 'react-router';
import './header.css'

//react icons
import { IoHome } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import { MdInstallMobile } from "react-icons/md";
import { DiDigitalOcean } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {

    const links =

        <div className='flex flex-col items-start lg:flex-row gap-5 lg:gap-10'>

            <NavLink className="flex items-center justify-center gap-1" to="/"><IoHome /> Home</NavLink>
            <NavLink className="flex items-center justify-center gap-1" to="/allapps"><FaAppStoreIos /> Apps</NavLink>
            <NavLink className="flex items-center justify-center gap-1" to='installation'><MdInstallMobile /> Installation</NavLink>

        </div>

    return (
        <div className='shadow-sm sticky top-0 z-10 bg-white/80 backdrop-blur-md'>
            <div className="navbar w-5/6 lg:w-3/4 mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden cursor-pointer pr-4">
                            <CiMenuBurger />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow p-5">
                            {links}
                        </ul>
                    </div>
                    
                    <NavLink to="/" className="text-lg flex items-center gap-1"><DiDigitalOcean className='text-5xl' /> AppSEA</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="https://github.com/ronouk" target='_blank' className="btn text-white flex items-center gap-1 bg-linear-to-r from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"><FaGithub /> Contribute</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;