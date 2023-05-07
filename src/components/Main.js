import React from 'react';
import Hero from './Hero';
import TeckStack from './TeckStack';
import Projects from './Projects';
import Contact from './Contact';
import Certificates from './Certificates';

const Main = () => {
    return (
        <div className='bg-slate-900'>
            <Hero />
            <TeckStack />
            <Certificates />
            <Projects />
            <Contact />
        </div>
    );
};

export default Main;