import React, { useContext } from 'react';
import { AppsDataContext } from '../../utilities/AppsDataContext';
import AppCard from '../app-card/AppCard';
import { NavLink } from 'react-router';

const TrendingApps = () => {
    const allAppsData = useContext(AppsDataContext)
    // console.log(allAppsData)

    const trendingAppsData = allAppsData.filter(singleApp => (singleApp.trending === true))
    // console.log(trendingAppsData);

    return (
        <div className='py-16 text-center space-y-16'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-6'>
                {
                    trendingAppsData.map((singleApp) => (
                        <NavLink key={singleApp.id} to={`/appdetails/${singleApp.id}`}>
                            <AppCard singleApp={singleApp}></AppCard>
                        </NavLink>
                    ))


                }
            </div>
            <NavLink to="/allapps">
                <button className='btn text-white flex items-center gap-1 bg-linear-to-r from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mx-auto'>Show All</button>
            </NavLink>
        </div>
    );
};

export default TrendingApps;