import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Shape from '../assets/background.json'
import Me from '../assets/me.png'


const Home = () => {
    const isDesktop = useMediaQuery("(min-width: 1000px)");
    return (
        <div id='home' className='bg-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            {isDesktop ? (
                <div className='pt-32 flex items-center bg-slate-900'>
                    <div className='flex flex-col ml-32'>
                        <h1 className='text-3xl text-white mb-6'>Muhammad Umer Khan</h1>
                        <h1 className='text-xl text-white mb-6'>I am a
                            <span className='text-blue-600'>
                                <Typewriter
                                    words={[' Frontend Developer', ' Backend Developer', ' MERN Stack Developer']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className='text-xl text-white mb-6 mr-24'>
                            An experienced MERN stack developer with 1+ years of expertise. My portfolio showcases diverse MERN stack projects, emphasizing clean code and exceptional user experiences. I've led teams and delivered successful projects. Let's collaborate on innovative web solutions that meet evolving client needs. Explore my portfolio and connect for potential collaborations.
                        </p>
                        <div className='flex space-x-12 justify-content-evenly'>
                            <a href='https://github.com/umerkhan23'>
                                <FontAwesomeIcon icon={faGithub} className='text-3xl text-white hover:text-blue-600 animate-pulse' />
                            </a>
                            <a href='https://www.linkedin.com/in/muhammad-umer-khan-32989b210/'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-3xl text-white hover:text-blue-600 animate-pulse' />
                            </a>
                            <a href='https://twitter.com/umerkhan_23'>
                                <FontAwesomeIcon icon={faTwitter} className='text-3xl text-white hover:text-blue-600 animate-pulse' />
                            </a>
                        </div>
                    </div>
                    <div className='absolute top-36 right-16 ml-16 w-2/5'>
                        <Lottie animationData={Shape} />
                    </div>
                    {/* <img src={Shape} alt='shape' className='absolute w-1/3'/> */}
                    <img src={Me} alt='shape' className='relative w-1/4 mx-40' />
                </div>
            )
                :
                (<div className='flex flex-col gap-24 items-center bg-slate-900'>
                    <div className='flex items-center justify-center relative top-16'>
                        <img src={Me} alt='shape' className='w-1/2' />
                    </div>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-xl text-white mb-6'>Muhammad Umer Khan</h1>
                        <h1 className='text-xl text-white mb-6'>I am a
                            <span className='text-blue-600'>
                                <Typewriter
                                    words={[' Frontend Developer', ' Backend Developer', ' MERN Stack Developer']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className='text-xl text-slate-400 mb-6 p-4'>
                            An experienced MERN stack developer with 1+ years of expertise. My portfolio showcases diverse MERN stack projects, emphasizing clean code and exceptional user experiences. I've led teams and delivered successful projects. Let's collaborate on innovative web solutions that meet evolving client needs. Explore my portfolio and connect for potential collaborations.
                        </p>
                        <div className='flex space-x-12 justify-content-evenly justify-center'>
                            <a href='https://github.com/umerkhan23'>
                                <FontAwesomeIcon icon={faGithub} className='text-3xl text-white hover:text-blue-600 animate-pulse' />
                            </a>
                            <a href='https://www.linkedin.com/in/muhammad-umer-khan-32989b210/'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-3xl text-white hover:text-blue-600 animate-pulse' />
                            </a>
                            <a href='https://twitter.com/umerkhan_23'>
                                <FontAwesomeIcon icon={faTwitter} className='text-3xl text-white hover:text-blue-600 animate-pulse' />
                            </a>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Home;