import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { addInstalledApptoStorage } from '../../utilities/localStorage';

const AppDetails = () => {

    const [isInstalled, setIsInstalled] = useState(false);

    const navigate = useNavigate();
    const selectedApp = useLoaderData();

    const { id, category, companyName, description, downloads, image, ratingAvg, ratings, reviews, size, title } = selectedApp;

    const reversedRatings = ratings ? [...ratings].reverse() : [];

    //handle installation

    useEffect(() =>{
        const installedApps = JSON.parse(localStorage.getItem("installedApps"));

        if(installedApps.includes(id)){
            setIsInstalled(true)
        }
    },[])

    const handleInstall = () => {
        const installation = addInstalledApptoStorage(id);

        if(installation){
            setIsInstalled(true)
            toast(<span className='text-green-700 font-bold'>{title} installed Successfully</span>)
        }
        else{
            toast(<span className='text-red-700 font-bold'>{title} already installed</span>)
        };
    }

    return (
        <div className='w-5/6 lg:w-3/4 mx-auto py-10'>
            <div className='space-y-6'>
                <div className='flex flex-col md:flex-row gap-8 border-b border-gray-300 pb-2 md:pb-6'>
                    <div className='bg-white flex items-center justify-center rounded-xl p-3 w-64'>
                        <img className='rounded-xl'
                            width={240}
                            src={image}
                            alt={title} />
                    </div>
                    <div className='flex flex-col gap-6 md:w-2/3 w-full'>
                        <div className='border-b border-gray-300 pb-4 w-full'>
                            <h2 className='font-semibold text-2xl'>{title}</h2>
                            <p><span className='font-semibold text-orange-500'>{category}</span> | Developed by: <span className='text-[#9F62F2] font-semibold'>{companyName}</span></p>
                        </div>
                        <div className='pb-4'>
                            <div className='flex gap-12 pb-4'>
                                <div className=''>
                                    <FaDownload className='text-green-500' />
                                    <p className='text-xs pt-2'>Downloads</p>
                                    <h1 className='text-2xl font-bold'>{downloads}</h1>
                                </div>
                                <div className=''>
                                    <FaStar className='text-yellow-500' />
                                    <p className='text-xs pt-2'>Average Ratings</p>
                                    <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
                                </div>
                                <div className=''>
                                    <FaThumbsUp className='text-purple-500' />
                                    <p className='text-xs pt-2'>Total Reviews</p>
                                    <h1 className='text-2xl font-bold'>{reviews}</h1>
                                </div>

                            </div>
                            <button
                            onClick={() => handleInstall()}
                            className={`bg-[#00D390] hover:bg-[#02a471] transition px-3 py-2 rounded-md text-white cursor-pointer ${isInstalled ? 'bg-gray-400 hover:bg-gray-500' : ""}`}>{isInstalled ? "Installed" : "Install Now"} ({size} MB)</button>
                        </div>
                    </div>
                </div>

                {/* middle chart */}

                <BarChart
                    layout='vertical'
                    style={{ width: '100%', maxWidth: '700px', height: '400px' }}
                    data={reversedRatings}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey="count" type='number'></XAxis>
                    <YAxis dataKey="name" type="category" width={50}></YAxis>
                    <Bar
                        dataKey="count"
                        fill="#ff8a24"
                        activeBar={{ fill: '#048c1b', cursor: "pointer" }}
                        radius={[0, 5, 5, 0]}>
                    </Bar>
                    <Tooltip cursor={false}></Tooltip>

                </BarChart>

                {/* description */}
                <div className='space-y-4'>
                    <h3 className='font-bold'>Description</h3>
                    <p className='text-[#627382]'>{description}</p>
                </div>

                <div className='flex justify-center'>
                    <button onClick={() => navigate(-1)} className='btn btn-success hover:text-white'>Go Back</button>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;