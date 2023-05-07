import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Shape from './assets/shape.png'
import Me from './assets/me.png'


const About = () => {
    return (
        <div className='bg-slate-900' data-aos='fade-up' data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className='flex items-center bg-slate-900'>
           <img src={Shape} alt='shape' className='relative w-1/2' />
           <img src={Me} alt='shape' className='absolute left-36 bottom-16 w-1/4' />
           <div className='flex flex-col absolute start-1/2 top-1/4 ml-32'>
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
            <p className='text-xl text-slate-400 mb-6 text-justify'>
            Welcome to my portfolio website! A<br/> software engineer skilled in mern-stack<br/> development, with a passion for coding<br/> and a quick learning ability to adapt to<br/> new technologies and challenges. You can<br/> find my projects and skills on the website,<br/> feel free to explore and ask any questions.
            </p>
           </div>
        </div>
        </div>
    );
};

export default About;