import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import ReactIcon from "../../img/icon4.png"
import webDev from "../../img/reactJS.png"
import mobDev from "../../img/reactNative.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Faran from "../../img/faran.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from 'framer-motion'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-scroll';

const Intro = () => {
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            {/* left side */}
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : ' ' }}>Hi! I am {" "}</span>

                    <span>Muhammad Faran Babar</span>

                    <span>Software Engineer having experience in React Development.
                        Adapted in all stages of development phase.
                        <br /> I am passionate about building excellent React Applications that improves
                        the lives of those around me.<br />
                        I specialize in creating React Native and ReactJS Applications
                        for clients ranging from individuals <br /> and small businesses all the
                        way to large enterprise corporations.</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className=' button i-button'> Hire me</button>
                </Link>
                <div className="i-icons">
                    <a href='https://github.com/Muhammad-Faran-Babar'>
                        <img src={Github} alt='' />
                    </a>
                    <a href='https://github.com/Muhammad-Faran-Babar'>
                        <img src={Instagram} alt='' />
                    </a>
                    <a href='https://www.linkedin.com/in/muhammad-faran-babar-09a614199/'>
                        <img src={LinkedIn} alt='' />
                    </a>

                </div>
            </div>

            {/* Right side */}
            <div className="i-right">
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={Faran} alt='' />

                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-22%" }}
                    transition={transition}

                    src={ReactIcon} alt='' />
                <motion.div
                    initial={{ top: '-4%', left: "76%" }}
                    whileInView={{ left: "60%" }}
                    transition={transition}
                    style={{ top: '-4%', left: '60%' }}
                    className="floating-div"
                >
                    <FloatingDiv image={webDev} txt1='ReactJS' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ top: '18rem', left: "9rem" }}
                    whileInView={{ left: "-3rem" }}
                    transition={transition}
                    style={{ top: '18rem', left: '-3rem' }}
                    className="floating-div"
                >
                    <FloatingDiv image={mobDev} txt1='React Native' txt2='Developer' />
                </motion.div>

                {/* Blur Div */}
                <div className="blur" style={{ background: "rgb(238 201 255)" }}>

                </div>
                <div className="blur" style={{
                    background: '#5f5d3e6b',
                    top: '17rem',
                    width: '12rem',
                    height: '11rem',
                    left: '-8rem'
                }}>
                </div>
            </div>
        </div>

    )
}

export default Intro