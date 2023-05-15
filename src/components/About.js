import React from 'react';
import Lottie from 'lottie-react';
import about from '../assets/about.json';
import Education from './Education';

const About = () => {
    return (
        <div className='relative top-20' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="3000">
            <div>
                <h1 className='text-4xl text-center text-white font-bold p-6'>About</h1>
                <div className='flex items-center justify-center mx-10'>
                    <p className='text-xl text-white w-full p-10'>I'm Muhammad Umer Khan, a highly motivated MERN Stack Developer with a burning passion for continuous learning and personal growth. I have hands-on experience in MongoDB, Express.js, React.js, and Node.js, allowing me to create dynamic and scalable web applications. If you take a look at my portfolio website, you'll see the result of my hard work, dedication, and ability to overcome challenges. I believe in setting clear goals and managing my time effectively, ensuring that I practice consistently and improve my skills. Whenever I face difficulties, I embrace them as opportunities to learn and grow. I actively seek feedback from mentors and peers, using it to refine my craft. By staying up-to-date with the latest trends and technologies, I'm able to deliver innovative solutions that keep up with the fast-paced world of web development.</p>
                    <div className='items-center w-1/2'>
                        <Lottie animationData={about} />
                    </div>
                </div>
                <div className='flex items-center justify-center m-10'>
                    <Education />
                </div>
            </div>
        </div>
    );
};

export default About;