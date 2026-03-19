import React from 'react';
import googlePlayLogo from "./../../assets/Google-play-icon.png"
import appleStoreLogo from "./../../assets/App-Store-icon.png"
import heroImage from "./../../assets/hero.png"

const Hero = () => {

    return (
        <div className='pt-10'>
            <div className='flex flex-col items-center text-center gap-8 w-5/6 md:w-2/3 mx-auto'>
                <h1 className='text-5xl font-bold'>
                    We Build
                    <br />
                    <span className='text-transparent bg-clip-text bg-linear-to-r hover:bg-linear-to-l from-[#632EE3] to-[#9F62F2] transition-all duration-300'>Productive</span> Apps</h1>
                <p className='text-[#627382]'>At AppSEA, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-5'>
                    <button className='flex items-center gap-3 border rounded px-3 py-2 cursor-pointer hover:bg-green-700 hover:text-white transition'>
                        <img className='w-5' src={googlePlayLogo} alt="" />
                        <span>Google Play</span>
                    </button>
                    <button className='flex items-center gap-3 border rounded px-3 py-2 cursor-pointer hover:bg-green-700 hover:text-white transition'>
                        <img className='w-5' src={appleStoreLogo} alt="" />
                        <span>App Store</span>
                    </button>
                </div>
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;