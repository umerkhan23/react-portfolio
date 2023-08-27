import React from 'react';
import { useState } from "react";
import DeptDashboard from '../assets/Department-Dashboard.png';
import MCSInventory from '../assets/MCS-Inventory.png';
import WeatherApp from '../assets/Weather-Forecast.png';
import TodoApp from '../assets/Todo-App.jpg';
import BloodNexusWebsite from '../assets/BloodNexusWebsite.png'
import Bank from '../assets/Bank-Management-System.png';
import Vaccine from '../assets/Vaccination-Management-System.png';

const Projects = () => {
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <div className='relative top-20 bg-slate-900 rounded-t-[120px] flex flex-col py-10 items-center' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div>
                <h1 className='text-4xl text-center text-white font-bold p-3'>Projects</h1>
            </div>
            <div className='flex gap-8 justify-center items-center pt-6'>
                <div id='Application' className={show1 ? 'border-spacing-2 border-solid border-blue-600 bg-blue-600 border-2 p-2 rounded-xl cursor-pointer' : "border-spacing-2 border-slate-900 border-solid border-2 p-2 rounded-xl cursor-pointer"} onClick={() => { setShow1(true); setShow2(false); setShow3(false); }} >
                    <h1 className='text-2xl text-center text-white'>Web</h1>
                </div>
                <div id='Application' className={show2 ? 'border-solid border-blue-600 bg-blue-600 border-spacing-2 border-2 p-2 rounded-xl cursor-pointer' : "border-spacing-2 border-solid border-slate-900 border-2 p-2 rounded-xl cursor-pointer"} onClick={() => { setShow2(true); setShow1(false); setShow3(false); }} >
                    <h1 className='text-2xl text-center text-white'>Desktop</h1>
                </div>
                <div id='Application' className={show3 ? 'border-solid border-blue-600 bg-blue-600 border-spacing-2 border-2 p-2 rounded-xl cursor-pointer' : "border-spacing-2 border-solid border-slate-900 border-2 p-2 rounded-xl cursor-pointer"} onClick={() => { setShow3(true); setShow2(false); setShow1(false); }} >
                    <h1 className='text-2xl text-center text-white'>Mobile</h1>
                </div>
            </div>
            <div className='flex items-center py-10 pb-10'>
                {show1 && <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={BloodNexusWebsite} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Blood Nexus Website </h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>React, Firebase</h1>
                                    <a href='https://github.com/umerkhan23/blood-nexus-official-website' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={MCSInventory} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Inventory Management</h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>MongoDB,ExpressJS,React,NodeJS</h1>
                                    <a href='https://github.com/SamiAsghar/MCS_Inventory' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={DeptDashboard} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Department Dashboard</h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>NodeJS, ExpressJS</h1>
                                    <a href='https://github.com/umerkhan23/Department_Dashboard' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={WeatherApp} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Weather Forecast</h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>HTML, CSS, JavaScript, Jquery</h1>
                                    <a href='https://github.com/umerkhan23/Weather_Forecast' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={TodoApp} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Todo APP</h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>HTML, CSS, JavaScript</h1>
                                    <a href='https://github.com/umerkhan23/Department_Dashboard' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                {show2 && <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={Bank} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Bank Management</h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>JAVA</h1>
                                    <a href='https://github.com/umerkhan23/Bank_Management_System' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className='group relative items-center justify-center overflow-hidden cursor-pointer rounded-xl'>
                            <div className='h-44 w-80'>
                                <img src={Vaccine} alt='react' className='h-full w-full group-hover:scale-125 transition-transform duration-500' />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '>
                                <div className='absolute bottom-0 inset-0 flex flex-col items-center px-10 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000'>
                                    <h1 className='text-lg text-white font-bold pt-5'>Vaccination Management</h1>
                                    <h1 className='text-md text-white font-bold pt-3'>Technologies</h1>
                                    <h1 className='text-sm text-white font-bold pt-1'>JAVA, SQL Server</h1>
                                    <a href='https://github.com/umerkhan23/Department_Dashboard' className='text-sm text-white mt-3 p-2 border-spacing-2 border-2 border-blue-600 hover:bg-blue-600 rounded-full'>View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                {show3 && <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Projects;