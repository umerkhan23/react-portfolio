import React from 'react';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HTML from '../assets/html.png';
import DownArrow from '../assets/down-arrow.png';

// Import Swiper styles
import "swiper/css";
import { Autoplay, Parallax } from "swiper";

const TeckStack = () => {

    return (
        <div className='relative top-16 flex flex-col h-screen bg-[#00008b] rounded-t-[120px]' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <h1 className='text-4xl text-center text-blue-600 font-bold pt-10'>Tech Stack</h1>
            <img src={DownArrow} alt='down arrow' className='w-12 items-center' />
            <div className='relative top-8'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    parallax={true}
                    speed={3000}
                    autoplay={{
                        delay: 10,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay, Parallax]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='relative top-8'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    parallax={true}
                    speed={3000}
                    autoplay={{
                        delay: 10,
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Parallax]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='flex flex-col items-center justify-center m-4 py-12 bg-slate-700 rounded-3xl shadow-xl shadow-blue-600'>
                                <img src={HTML} alt="html" className='w-12' />
                                <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default TeckStack;