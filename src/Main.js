import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TeckStack from './components/TeckStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Main = () => {
    return (
        <div>
            <About />
            <TeckStack />
            <Projects />
            <Contact />
        </div>
    );
};

export default Main;