import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-16 w-full'>
            <div className='text-white space-y-16 w-3/4 mx-auto'>
                <div className='text-center text-4xl font-bold capitalize'>
                    <h1>Trusted by millions, built for you</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='space-y-3 text-center'>
                        <p className='text-xs'>Total Downloads</p>
                        <h1 className='text-3xl font-bold'>29.6M</h1>
                        <p className='text-xs'>21% more than last month</p>
                    </div>
                    <div className='space-y-3 text-center'>
                        <p className='text-xs'>Total Reviews</p>
                        <h1 className='text-3xl font-bold'>906k</h1>
                        <p className='text-xs'>46% more than last month</p>
                    </div>
                    <div className='space-y-3 text-center'>
                        <p className='text-xs'>Active Apps</p>
                        <h1 className='text-3xl font-bold'>132+</h1>
                        <p className='text-xs'>31 more will launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;