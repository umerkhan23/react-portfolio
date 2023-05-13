import React from 'react';
import { useState, useEffect } from "react";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Navbar from "./Navbar";
import DotGroup from "./DotGroup";
import Home from './Home';
import About from './About';
import TeckStack from './TeckStack';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

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
            <div id='teckstack' className="">
                <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onHoverStart={() => setSelectedPage("teckstack")}
                >
                    <TeckStack />
                </motion.div>
            </div>
            <div id='certificates' className="">
                <LineGradient />
            </div>
            <div className="bg-blue-800">
                <div className="">
                    <motion.div
                        onHoverStart={() => setSelectedPage("certificates")}
                    >
                        <Certificates />
                    </motion.div>
                </div>
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
                    <LineGradient />
                </div>
                <div className="bg-slate-900">
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