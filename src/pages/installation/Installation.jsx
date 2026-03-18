import React, { useEffect, useState } from 'react';
import { getStoredInstalledApps } from '../../utilities/localStorage';
import { useLoaderData } from 'react-router';
import { BiSolidChevronDown } from 'react-icons/bi';
import InstalledAppCard from '../../components/installed-app-card/InstalledAppCard';

const Installation = () => {

    const [sort, setSort] = useState('Default');

    const [installedApps, setInstalledApps] = useState([]);

    const storedInstalledApps = getStoredInstalledApps()
    console.log(storedInstalledApps);

    const allApps = useLoaderData()

    //sorting function
    const handleSort = (sortType) => {
        // setSort(sortType)

        if (sortType === "Descending") {

            setSort(sortType);
            const bigToSmall = [...installedApps].sort((a, b) => (b.size) - (a.size));
            setInstalledApps(bigToSmall);
        }

        if (sortType === "Ascending") {

            setSort(sortType);
            const smallToBig = [...installedApps].sort((a, b) => (a.size) - (b.size));
            setInstalledApps(smallToBig);
        }

        if (sortType === "Name") {

            setSort(sortType);
            const aToZ = [...installedApps].sort((a, b) => a.title.localeCompare(b.title));
            setInstalledApps(aToZ);
        }

    }

    useEffect(() => {

        const installedAppsData = allApps.filter(app => storedInstalledApps.includes(app.id))
        setInstalledApps(installedAppsData)
    }, [])

    return (
        <div className='py-16 text-center w-5/6 lg:w-3/4 mx-auto'>
            <div className='space-y-4 mb-16'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex items-center justify-between mb-4'>
                <p className='font-semibold'>({installedApps.length}) apps found</p>
                <div className="max-w-md">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By: {sort} <BiSolidChevronDown className='mt-1' /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => { handleSort("Descending") }}><a>Big to Small</a></li>
                            <li onClick={() => { handleSort("Ascending") }}><a>Small to Big</a></li>
                            <li onClick={() => { handleSort("Name") }}><a>Name</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-6'>

                {
                    installedApps.map((singleApp, index) => <InstalledAppCard
                        key={index}
                        singleApp={singleApp}
                        installedApps={installedApps}
                        setInstalledApps={setInstalledApps}
                    ></InstalledAppCard>)
                }

            </div>
        </div>
    );
};

export default Installation;