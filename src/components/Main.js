import React from 'react';
import { useState, useEffect } from "react";
import Home from './Home';
import TeckStack from './TeckStack';
import LineGradient from "./LineGradient";
import Projects from './Projects';
import Contact from './Contact';
import Certificates from './Certificates';
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import DotGroup from "./DotGroup";
import Footer from './Footer';
import useMediaQuery from "../hooks/useMediaQuery";

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
                    onViewportEnter={() => setSelectedPage("home")}
                >
                    <Home setSelectedPage={setSelectedPage} />
                </motion.div>
            </div>
            <div id='teckstack' className="">
            <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onViewportEnter={() => setSelectedPage("teckstack")}
                >
                    <TeckStack />
                </motion.div>
            </div>
            <div id='certificates' className="">
            <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onViewportEnter={() => setSelectedPage("certificates")}
                >
                    <Certificates />
                </motion.div>
            </div>
            <div id='projects' className="">
            <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onViewportEnter={() => setSelectedPage("projects")}
                >
                    <Projects />
                </motion.div>
            </div>
            <div id='contact' className="">
            <LineGradient />
            </div>
            <div className="">
                <motion.div
                    onViewportEnter={() => setSelectedPage("contact")}
                >
                    <Contact />
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;