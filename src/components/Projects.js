import React from 'react';
import { useState } from "react";

const Projects = () => {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <div className='relative top-20 bg-slate-900 rounded-t-[120px] flex flex-col py-10 items-center' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div>
                <h1 className='text-4xl text-center text-white font-bold p-3'>Projects</h1>
            </div>
            <div className='flex gap-16 justify-center items-center pt-6'>
                <div id='Application' className={show1 ? 'border-spacing-2 border-solid border-blue-600 bg-blue-600 border-2 p-2 rounded-xl' : "border-spacing-2 border-slate-900 border-solid border-2 p-2 rounded-xl"} onClick={() => { setShow1(true); setShow2(false); setShow3(false); }} >
                    <h1 className='text-2xl text-center text-white'>Web</h1>
                </div>
                <div id='Application' className={show2 ? 'border-solid border-blue-600 bg-blue-600 border-spacing-2 border-2 p-2 rounded-xl' : "border-spacing-2 border-solid border-slate-900 border-2 p-2 rounded-xl"} onClick={() => { setShow2(true); setShow1(false); setShow3(false); }} >
                    <h1 className='text-2xl text-center text-white'>Desktop</h1>
                </div>
                <div id='Application' className={show3 ? 'border-solid border-blue-600 bg-blue-600 border-spacing-2 border-2 p-2 rounded-xl' : "border-spacing-2 border-solid border-slate-900 border-2 p-2 rounded-xl"} onClick={() => { setShow3(true); setShow2(false); setShow1(false); }} >
                    <h1 className='text-2xl text-center text-white'>Mobile</h1>
                </div>
            </div>
            <div className='flex items-center pt-6'>
                {show1 && <div className='flex flex-row items-center'>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                </div>}
                {show2 && <div className='flex flex-row items-center'>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                </div>}
                {show3 && <div className='flex flex-row items-center'>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                    <div className='flex items-center p-4'>
                        <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' />
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Projects;