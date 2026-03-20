import React, { useContext, useState } from 'react';
import { AppsDataContext } from '../../utilities/AppsDataContext';
import { NavLink } from 'react-router';
import AppCard from '../../components/app-card/AppCard';
import { FaSearch } from 'react-icons/fa';

const AllApps = () => {

    const allAppsData = useContext(AppsDataContext)
    console.log(allAppsData)

    
    //search functionalities
    const [searchTerm, setSearchTerm] = useState("");

    const filteredApps = allAppsData.filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className='py-16 text-center w-5/6 lg:w-3/4 mx-auto'>
            <div className='space-y-4 mb-16'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between mb-4'>
                <p className='font-semibold'>({filteredApps.length}) apps found</p>
                <div className="max-w-md">
                    {/* 1. Relative container to anchor the absolute icon */}
                    <div className="relative flex items-center">

                        {/* 2. Absolute icon positioned to the left */}
                        <div className="absolute left-3 text-gray-400">
                            <FaSearch />
                        </div>

                        {/* 3. Input with padding-left (pl-10) to make room for the icon */}
                        <input
                            type="text"
                            name='search'
                            placeholder="Search apps..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                        />

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-6'>
                {
                    filteredApps.map((singleApp) => (
                        <NavLink key={singleApp.id} to={`/appdetails/${singleApp.id}`}>
                            <AppCard singleApp={singleApp}></AppCard>
                        </NavLink>

                    ))

                }
            </div>
        </div>
    );
};

export default AllApps;