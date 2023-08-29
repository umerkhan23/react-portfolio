import { Swiper, SwiperSlide } from "swiper/react";
import ReactCertificate from '../assets/react-certificate.png';
import GraphicDesigner from '../assets/GraphicDesign.png';
import Freelancer from '../assets/Freelancer.png';
import SCOCertificate from '../assets/SCO.jpg';
import useMediaQuery from "../hooks/useMediaQuery";

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
                                        <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R'>
                                            <div className='h-[400px] w-[550px]'>
                                                <img src={ReactCertificate} alt="Certificate" className='h-[400px] w-[550px]' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                        <a href='https://digiskills.pk/verify/'>
                                            <div className='h-[400px] w-[550px]'>
                                                <img src={Freelancer} alt="Certificate" className='h-[400px] w-[550px]' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                        <a href='https://digiskills.pk/verify/'>
                                            <div className='h-[400px] w-[550px]'>
                                                <img src={GraphicDesigner} alt="Certificate" className='h-[400px] w-[550px]' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="items-center justify-center overflow-hidden rounded-xl p-8">
                                        <div className='h-[400px] w-[550px]'>
                                            <img src={SCOCertificate} alt="Certificate" className='h-[400px] w-[550px]' />
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
                                        <a href='https://www.coursera.org/account/accomplishments/verify/GF22HG9JSL7R'>
                                            <div className='h-[250px] w-full'>
                                                <img src={ReactCertificate} alt="Certificate" className='h-[250px] w-full' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                        <a href='https://digiskills.pk/verify/'>
                                            <div className='h-[250px] w-full'>
                                                <img src={Freelancer} alt="Certificate" className='h-[250px] w-full' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="items-center justify-center overflow-hidden cursor-pointer rounded-xl p-8">
                                        <a href='https://digiskills.pk/verify/'>
                                            <div className='h-[250px] w-full'>
                                                <img src={GraphicDesigner} alt="Certificate" className='h-[250px] w-full' />
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="items-center justify-center overflow-hidden rounded-xl p-8">
                                        <div className='h-[250px] w-full'>
                                            <img src={SCOCertificate} alt="Certificate" className='h-[250px] w-full' />
                                        </div>
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