import React from 'react';
import errorPageImage from "./../../assets/error-404.png"
import { NavLink } from 'react-router';

const PageNotFound = () => {

    return (
        <div className='w-5/6 lg:w-3/4 py-10 mx-auto flex flex-1'>
            <div className='flex flex-col justify-center items-center flex-1 space-y-3'>
                <img src={errorPageImage} width={320} alt="Page not found" />
                <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
                <p className=''>The page you are looking for is not available.</p>
                <NavLink to='..'><button className='cursor-pointer btn bg-linear-to-r hover:bg-linear-to-l from-[#632EE3] to-[#9F62F2] text-white'>Go Back</button></NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;