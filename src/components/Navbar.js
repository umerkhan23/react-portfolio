import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center bg-sky-950 h-20'>
            <div className='flex items-start ml-8 p-6 pr-16'>
                <h1 className='text-xl text-sky-200'>Muhammad Umer Khan</h1>
            </div>
                <div className='flex text-right ml-8 p-6 pr-16 space-x-6 absolute right-0'>
                    <Link to="/">
                        <h1 className='text-xl text-sky-200'>Home</h1>
                    </Link>
                    <Link to="/About">
                        <h1 className='text-xl text-sky-200'>About</h1>
                    </Link>
                    <Link to="/TeckStack">
                        <h1 className='text-xl text-sky-200'>Teck Stack</h1>
                    </Link>
                    <Link to="/Projects">
                        <h1 className='text-xl text-sky-200'>Projects</h1>
                    </Link>
                    <Link to="/Contact">
                        <h1 className='text-xl text-sky-200'>Contact</h1>
                    </Link>
                </div>
        </div>
    );
};

export default Navbar;