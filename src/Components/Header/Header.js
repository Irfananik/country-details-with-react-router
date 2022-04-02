import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between">
            <div className="hidden md:block">
                <Link to='/' className='text-2xl font-sans font-bold'>Countries Details</Link>
            </div>
            <div className="text-xl flex gap-4">
                <Link to="/home">Home</Link>
                <Link to="/countries">Countries</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;