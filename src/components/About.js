import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Lottie from 'lottie-react';
import about from '../assets/about.json';
import Education from './Education';

const About = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');
    return (
        <>
        {isDesktop? (<div className='relative top-20' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <div>
                <h1 className='text-4xl text-center text-white font-bold p-6'>About</h1>
                <div className='flex items-center justify-center mx-10'>
                    <p className='text-xl text-white w-full p-10'>Greetings! I am Muhammad Umer Khan, a highly motivated MERN Stack Developer with a deep passion for continuous learning and personal growth. My expertise lies in MongoDB, Express.js, React.js, and Node.js, enabling me to craft dynamic and scalable web applications. If you explore my portfolio website, you'll witness the culmination of my hard work, dedication, and ability to overcome challenges. I am a firm believer in setting clear goals and managing my time effectively, ensuring consistent practice to enhance my skills. Challenges are embraced as opportunities for learning and growth, and I actively seek feedback from mentors and peers to refine my craft. By staying up-to-date with the latest trends and technologies, I deliver innovative solutions that keep pace with the rapidly evolving world of web development.</p>
                    <div className='items-center w-1/2'>
                        <Lottie animationData={about} />
                    </div>
                </div>
                <div className='flex items-center justify-center m-10'>
                    <Education />
                </div>
            </div>
        </div>):(<div className='relative top-20' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <div>
                <h1 className='text-4xl text-center text-white font-bold p-6'>About</h1>
                <div className='flex flex-col items-center justify-center mx-10'>
                    <p className='text-xl text-white w-full text-center p-2'>Greetings! I am Muhammad Umer Khan, a highly motivated MERN Stack Developer with a deep passion for continuous learning and personal growth. My expertise lies in MongoDB, Express.js, React.js, and Node.js, enabling me to craft dynamic and scalable web applications. If you explore my portfolio website, you'll witness the culmination of my hard work, dedication, and ability to overcome challenges. I am a firm believer in setting clear goals and managing my time effectively, ensuring consistent practice to enhance my skills. Challenges are embraced as opportunities for learning and growth, and I actively seek feedback from mentors and peers to refine my craft. By staying up-to-date with the latest trends and technologies, I deliver innovative solutions that keep pace with the rapidly evolving world of web development.</p>
                    <div className='items-center w-3/5'>
                        <Lottie animationData={about} />
                    </div>
                </div>
                <div className='flex items-center justify-center m-10'>
                    <Education />
                </div>
            </div>
        </div>)}
        </>
    );
};

export default About;