import React, { useState } from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AppCard = ({ singleApp }) => {

    const { image, ratingAvg, title, downloads } = singleApp;

    const [appImage, setAppImage] = useState(image);
    return (
        <div className='h-full'>
            <div className='h-full flex flex-col p-2 rounded-lg space-y-4 mx-auto bg-white hover:bg-orange-50 transition'>
                <div className='bg-gray-200 rounded-xl p-4'>
                    <img className='h-36 mx-auto rounded-xl object-contain'
                        src={appImage}
                        alt={title}
                        onError={() => setAppImage("https://img.freepik.com/free-vector/colorful-high-quality-vector-internet-data-logo_557339-484.jpg?semt=ais_hybrid&w=740&q=80")} />
                </div>
                <h3 className='font-semibold h-full'>{title}</h3>
                <div className='flex justify-between'>
                    <div className='flex items-center bg-gray-100 px-3 py-2 rounded-lg gap-1 text-green-600 text-sm'>
                        <FaDownload /> {downloads}
                    </div>
                    <div className='flex items-center bg-gray-100 px-3 py-2 rounded-lg gap-1 text-orange-500 text-sm'>
                        <FaStar /> {ratingAvg}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppCard;