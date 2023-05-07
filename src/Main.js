import React from 'react';
import About from './About';
import TeckStack from './components/TeckStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Main = () => {
    return (
        <div className='bg-slate-900'>
            <About />
            <TeckStack />
            <Projects />
            <Contact />
        </div>
    );
};

export default Main;