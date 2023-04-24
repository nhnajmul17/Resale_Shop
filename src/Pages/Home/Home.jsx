import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import PhoneCategory from '../../Components/Home/Category/PhoneCategory';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-cyan-200 px-5 min-h-screen'>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
        </div>
    );
};

export default Home;