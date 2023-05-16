import React from 'react';
import Lottie from 'lottie-react';
import useMediaQuery from "../hooks/useMediaQuery";
import Educationlottie from '../assets/Education.json';
import Graduation from '../assets/graduation-hat.png';

const Education = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');
    return (
        <>
        {isDesktop? (<div className='flex items-center pt-10'>
            <div className='items-center w-1/2'>
                <Lottie animationData={Educationlottie} />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-4xl text-center text-white font-bold'>Education</h1>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center my-4 p-2 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                            <div className='p-2'>
                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                            </div>
                            <div className=''>
                                <h1 className='text-xl text-white font-bold pt-4'>National University of Science and Technology (NUST)</h1>
                                <h1 className='text-md text-white pt-2'>Bachelor's degree, Computer Software Engineering</h1>
                                <h1 className='text-md text-white pt-2'>Nov 2020 - Present</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center my-4 p-2 pr-36 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                            <div className='p-2'>
                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                            </div>
                            <div>
                                <h1 className='text-xl text-white font-bold pt-4'>Abdul Razzaq Fazaia College, M.M.Alam</h1>
                                <h1 className='text-md text-white pt-2'>FSC, Pre-Engineering</h1>
                                <h1 className='text-md text-white pt-2'>Jun 2018 - June 2020</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center my-4 p-2 pr-36 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                            <div className='p-2'>
                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                            </div>
                            <div>
                                <h1 className='text-xl text-white font-bold pt-4'>Abdul Razzaq Fazaia College, M.M.Alam</h1>
                                <h1 className='text-md text-white pt-2'>Matric, Science</h1>
                                <h1 className='text-md text-white pt-2'>May 2016 - May 2018</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>):(<div className='flex flex-col items-center pt-10'>
            <div className='flex flex-col'>
                <h1 className='text-4xl text-center text-white font-bold'>Education</h1>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center my-4 p-2 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                            <div className='p-2'>
                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                            </div>
                            <div className=''>
                                <h1 className='text-lg text-white font-bold pt-4'>National University of Science and Technology (NUST)</h1>
                                <h1 className='text-sm text-white pt-2'>Bachelor's degree, Computer Software Engineering</h1>
                                <h1 className='text-sm text-white pt-2'>Nov 2020 - Present</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center my-4 p-2 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                            <div className='p-2'>
                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                            </div>
                            <div>
                                <h1 className='text-lg text-white font-bold pt-4'>Abdul Razzaq Fazaia College, M.M.Alam</h1>
                                <h1 className='text-sm text-white pt-2'>FSC, Pre-Engineering</h1>
                                <h1 className='text-sm text-white pt-2'>Jun 2018 - June 2020</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center my-4 p-2 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                            <div className='p-2'>
                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                            </div>
                            <div>
                                <h1 className='text-lg text-white font-bold pt-4'>Abdul Razzaq Fazaia College, M.M.Alam</h1>
                                <h1 className='text-sm text-white pt-2'>Matric, Science</h1>
                                <h1 className='text-sm text-white pt-2'>May 2016 - May 2018</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items-center w-4/5 mt-20'>
                <Lottie animationData={Educationlottie} />
            </div>

        </div>)}
        </>
    );
};

export default Education;