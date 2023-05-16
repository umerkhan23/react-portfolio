import { Swiper, SwiperSlide } from "swiper/react";
import ReactCertificate from '../assets/react-certificate.png';
import useMediaQuery from "../hooks/useMediaQuery";
import Send from "../assets/diagonal-arrow.png";

import "swiper/css";
import { Autoplay, Parallax } from "swiper";

const Certificates = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');
    return (
        <div className='relative top-20 bg-blue-800'>
            <div className='' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            {isDesktop ? (
                <div className=''>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-4xl text-center text-white font-bold pt-10 p-3'>Certificates</h1>
                    </div>
                    <div className='py-8'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            loop={true}
                            freeMode={true}
                            parallax={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Autoplay, Parallax]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-64 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-64 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-64 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-64 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            ) : (
                <div className=''>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-4xl text-center text-white font-bold pt-10 p-3'>Certificates</h1>
                    </div>
                    <div className='py-8'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            freeMode={true}
                            parallax={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Autoplay, Parallax]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    {/* <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-md text-slate-900 font-bold pt-64 my-16 mx-5'>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-56 top-64 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    {/* <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-72 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    {/* <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-72 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                    <div className=''>
                                        <img src={ReactCertificate} alt="Certificate" className='' />
                                    </div>
                                    {/* <div className='absolute inset-0'>
                                        <div className='absolute inset-0 flex px-10'>
                                            <h1 className='text-lg text-slate-900 font-bold pt-96 m-10 '>Advanced React</h1>
                                            <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R' className='relative left-72 top-96 my-9 hover:transition-transform hover:translate-y-0.5'><img src={Send} alt="" className="w-8"/></a>
                                        </div>
                                    </div> */}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            )}
            </div>
            </div>
    );
};

export default Certificates;