import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Lottie from 'lottie-react';
import about from '../assets/about.json';
import Educationlottie from '../assets/Education.json';
import Graduation from '../assets/graduation-hat.png';

const About = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');
    return (
        <>
            {isDesktop && <div className='relative top-20' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                <div>
                    <h1 className='text-4xl text-center text-white font-bold p-6'>About</h1>
                    <div className='flex items-center justify-center mx-10'>
                        <p className='text-xl text-white w-full py-10'data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">Greetings! I am Muhammad Umer Khan, a highly motivated MERN Stack Developer with a deep passion for continuous learning and personal growth. My expertise lies in MongoDB, Express.js, React.js, and Node.js, enabling me to craft dynamic and scalable web applications. If you explore my portfolio website, you'll witness the culmination of my hard work, dedication, and ability to overcome challenges. I am a firm believer in setting clear goals and managing my time effectively, ensuring consistent practice to enhance my skills. Challenges are embraced as opportunities for learning and growth, and I actively seek feedback from mentors and peers to refine my craft. By staying up-to-date with the latest trends and technologies, I deliver innovative solutions that keep pace with the rapidly evolving world of web development.</p>
                        <div className='items-center w-1/2' data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                            <Lottie animationData={about} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center m-10'>
                        <div className='flex flex-col items-center pt-10' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                            <h1 className='text-4xl text-center text-white font-bold'>Education</h1>
                            <div  className='flex items-center'>
                                <div className='items-center w-1/2' data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                    <Lottie animationData={Educationlottie} />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <div className='flex items-center justify-center my-4 p-2 px-3 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                                <div className='p-2'>
                                                    <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                                                </div>
                                                <div className=''>
                                                    <h1 className='text-lg text-white font-bold pt-4'>National University of Science and Technology (NUST)</h1>
                                                    <h1 className='text-sm text-white pt-2'>Bachelor's degree, Computer Software Engineering</h1>
                                                    <h1 className='text-sm text-white pt-2'>Nov 2020 - Present</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center my-4 p-2 pr-36 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                                <div className='p-2'>
                                                    <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                                                </div>
                                                <div>
                                                    <h1 className='text-lg text-white font-bold pt-4'>Abdul Razzaq Fazaia College, M.M.Alam</h1>
                                                    <h1 className='text-sm text-white pt-2'>FSC, Pre-Engineering</h1>
                                                    <h1 className='text-sm text-white pt-2'>Jun 2018 - June 2020</h1>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center my-4 p-2 pr-36 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
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
                            </div>

                        </div>
                    </div>
                </div>
            </div>}
            {!isDesktop && <div className='relative top-20' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                <div>
                    <h1 className='text-4xl text-center text-white font-bold p-6'>About</h1>
                    <div className='flex flex-col items-center justify-center mx-10'>
                        <div className='items-center w-4/5' data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                            <Lottie animationData={about} />
                        </div>
                        <p className='text-xl text-center text-white w-full p-3' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">Greetings! I am Muhammad Umer Khan, a highly motivated MERN Stack Developer with a deep passion for continuous learning and personal growth. My expertise lies in MongoDB, Express.js, React.js, and Node.js, enabling me to craft dynamic and scalable web applications. If you explore my portfolio website, you'll witness the culmination of my hard work, dedication, and ability to overcome challenges. I am a firm believer in setting clear goals and managing my time effectively, ensuring consistent practice to enhance my skills. Challenges are embraced as opportunities for learning and growth, and I actively seek feedback from mentors and peers to refine my craft. By staying up-to-date with the latest trends and technologies, I deliver innovative solutions that keep pace with the rapidly evolving world of web development.</p>
                    </div>
                    <div className='flex items-center justify-center m-10'>
                        <div className='flex flex-col items-center pt-10'>
                            <h1 className='text-4xl text-center text-white font-bold'>Education</h1>
                            <div className='items-center w-11/12' data-aos='zoom-in' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                <Lottie animationData={Educationlottie} />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='flex items-center justify-center my-4 p-1 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                            <div className='p-2'>
                                                <img src={Graduation} alt='Graduation' className='w-20 h-16' />
                                            </div>
                                            <div className=''>
                                                <h1 className='text-lg text-white font-bold pt-4'>National University of Science and Technology (NUST)</h1>
                                                <h1 className='text-sm text-white pt-2'>Bachelor's degree, Computer Software Engineering</h1>
                                                <h1 className='text-sm text-white pt-2'>Nov 2020 - Present</h1>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center my-4 p-1 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                            <div className='p-2'>
                                                <img src={Graduation} alt='Graduation' className='w-16 h-16' />
                                            </div>
                                            <div>
                                                <h1 className='text-lg text-white font-bold pt-4'>Abdul Razzaq Fazaia College, M.M.Alam</h1>
                                                <h1 className='text-sm text-white pt-2'>FSC, Pre-Engineering</h1>
                                                <h1 className='text-sm text-white pt-2'>Jun 2018 - June 2020</h1>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center my-4 p-1 bg-gray-700 rounded-3xl shadow-lg shadow-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
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

                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default About;