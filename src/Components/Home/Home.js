import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='md:px-16 py-8'>
            <div className='flex flex-col justify-center h-[80vh] items-center'>
                <h1 className=' font-mono font-bold text-xl md:text-5xl '>
                    Welcome to all countries details comunity<span className='text-6xl block'>☕</span>
                </h1>
                <Link to='/countries' className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>
                    Explore Hole World
                </Link>
            </div>
        </div>
    );
};

export default Home;