import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import bannerPhone from '../../../assets/bannerPhone.png'
const Banner = () => {
    return (
        <div className="hero pt-10">
            <div className=" hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2' data-aos="fade-left">
                    <img src={bannerPhone} />
                </div>
                <div className='' data-aos="fade-right">
                    <h1 className="text-5xl font-bold">Sell your phone, <br />let us help you <span className='text-info'>unlock</span> it!</h1>
                    <p className="py-6 lg:w-2/3 font-bold">If you are looking for selling your old phone this is the Right Place.<br />Because this is the place where Sellers can sell their Old phone and Buyers can easily buy those easily.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;