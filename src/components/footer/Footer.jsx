import React from 'react';
import { BsGooglePlay } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Footer = () => {

    const socialLinks = <>
        <NavLink to="https://play.google.com/store/apps" target='_blank'><BsGooglePlay /></NavLink>
        <NavLink to="https://www.apple.com/app-store/" target='_blank'><FaAppStoreIos /></NavLink>
        <NavLink to="https://github.com/ronouk" target='_blank'><FaGithub /></NavLink>
    </>
    return (
        <div className='bg-neutral'>
            <footer className="footer flex flex-col md:flex-row justify-between text-neutral-content py-10 w-5/6 lg:w-3/4 mx-auto items-center gap-5">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="flex gap-5">
                    {socialLinks}
                </nav>
            </footer>
        </div>
    );
};

export default Footer;