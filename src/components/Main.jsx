import React from 'react';
import { useState, useEffect } from "react";
import LineGradient from "./LineGradient.jsx";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "./Navbar.jsx";
import DotGroup from "./DotGroup.jsx";
import Home from './Home.jsx';
import About from './About.jsx';
import TeckStack from './TeckStacks.jsx';
import Certificates from './Certificates.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const Main = () => {
    const [selectedPage, setSelectedPage] = useState("home");
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage("home");
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-slate-900">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="">
                {isDesktop && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <motion.div
                    onHoverStart={() => setSelectedPage("home")}
                >
                    <Home setSelectedPage={setSelectedPage} />
                </motion.div>
            </div>
            <div id='about' className="">
                <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onHoverStart={() => setSelectedPage("about")}
                >
                    <About />
                </motion.div>
            </div>
            <div id='techstack' className="">
                <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onHoverStart={() => setSelectedPage("techstack")}
                >
                    <TeckStack />
                </motion.div>
            </div>
            <div id='certificates' className="">
            </div>
                <div className="">
                    <motion.div
                        onHoverStart={() => setSelectedPage("certificates")}
                    >
                        <Certificates />
                    </motion.div>
                </div>
            <div className="bg-blue-800">
                <div id='projects' className="">
                    <LineGradient />
                </div>
                <div className="">
                    <motion.div
                        onHoverStart={() => setSelectedPage("projects")}
                    >
                        <Projects />
                    </motion.div>
                </div>
                <div id='contact' className="">
                </div>
                <div className="">
                    <div className="">
                        <motion.div
                            onHoverStart={() => setSelectedPage("contact")}
                        >
                            <Contact />
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;