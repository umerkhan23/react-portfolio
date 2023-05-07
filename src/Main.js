import React from 'react';
import Hero from './Hero';
import TeckStack from './components/TeckStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

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