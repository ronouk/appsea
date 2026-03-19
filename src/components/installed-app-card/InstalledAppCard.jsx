import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { removeFromLocalStorage } from '../../utilities/localStorage';
import { toast } from 'react-toastify';

const InstalledAppCard = ({ singleApp, installedApps, setInstalledApps }) => {

    const { id, downloads, image, ratingAvg, size, title } = singleApp;

    const handleUninstall = (id) => {
        removeFromLocalStorage(id)
        const newInstalledApps = installedApps.filter(app => app.id !== id)
        setInstalledApps(newInstalledApps);
        toast(<span className='text-red-700 font-bold'>{title} uninstalled</span>)
    }

    return (
        <div>
            <div className='bg-white p-3 flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <div className='w-12'>
                        <img className='rounded' src={image} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-left text-sm font-semibold'>{title}</h3>
                        <div className='flex gap-3 text-xs'>
                            <div className='text-green-500 flex items-center gap-2'>
                                <FaDownload />
                                <p className='font-semibold'>{downloads}</p>
                            </div>
                            <div className='text-yellow-500 flex items-center gap-2'>
                                <FaStar />
                                <p className='font-semibold'>{ratingAvg}</p>
                            </div>
                            <div className='text-[#627382]'>
                                {size} MB
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleUninstall(id)} className='btn bg-[#00D390] hover:bg-[#04a471] text-white'>Uninstall</button>

            </div>
        </div>
    );
};

export default InstalledAppCard;