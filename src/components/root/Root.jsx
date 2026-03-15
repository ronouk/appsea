import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import Hero from '../Hero/Hero';
import Statistics from '../statistics/Statistics';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Statistics></Statistics>
            <div className='w-5/6 lg:w-3/4 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;