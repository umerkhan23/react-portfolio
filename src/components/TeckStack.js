import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import HTML from '../assets/html.png';

// Import Swiper styles
import "swiper/css";
import { Autoplay, Parallax } from "swiper";

const TeckStack = () => {
    const isDesktop = useMediaQuery("(min-width: 1000px)");
    return (
        <div className='relative top-20 flex flex-col bg-blue-600 rounded-t-[120px] h-[65vh]' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        { isDesktop ? (
            <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl text-center text-white font-bold pt-10 p-3'>Tech Stack</h1>
            </div>
            <div className=''>
                <div className='py-12'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}
                        freeMode={true}
                        parallax={true}
                        speed={3000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay, Parallax]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            </div>
    ):(
        <div>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl text-center text-white font-bold pt-10 p-3'>Tech Stack</h1>
            </div>
            <div className=''>
                <div className='py-12'>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        freeMode={true}
                        parallax={true}
                        speed={3000}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay, Parallax]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='flex flex-col items-center justify-center m-4 py-12 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900'>
                                    <img src={HTML} alt="html" className='w-12' />
                                    <h1 className='text-2xl text-white font-bold py-4'>HTML</h1>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            </div>
    )}
    </div>
    );
};

export default TeckStack;