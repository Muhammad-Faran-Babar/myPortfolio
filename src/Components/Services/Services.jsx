import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Faranresume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="Services" id='Services'>
            {/* left Side */}
            <div className="awesome">
                <span 
                className='title'
                style={{ color: darkMode ? 'white' : ' ' }}>
                    My Awesome
                </span>
                <span
                className='title2'
                >
                    Skills
                </span>
                <span>
                    <br />
                    I am a React Developer having Degree in BS-Computer Science <br/>
                    From One of top Ten Universities of Pakistan that is :<br/>
                    UIIT-PMAS Arid Agriculture University, Rawalpindi.<br/>
                    Have good understanding of React core concepts. I am Also good in Error handling. 
                </span>
                <a href={Resume} download>
                    <button className='button s-button' > Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#f8c7a2" }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                {/* 1st card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "20rem" }}
                    transition={transition}
                    style={{ left: '20rem', top: '-1rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Develop"}
                        detail={"ReactJS, React Native, JavaScript, Navigation, React-Hook, React Native CLI, React Native Expo"}
                    />
                </motion.div>
                {/* 2nd card */}
                <motion.div 
                 initial={{ left: "-11rem", top: "12rem" }}
                 whileInView={{ left: "-1rem" }}
                 transition={transition}
                style={{ left: '-2rem', top: '10rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Design"}
                        detail={"UI/UX, CSS3, ECMAScript,Google,Github,Git, HTML, CSS, for Android, for Iphone "}
                    />
                </motion.div>
                {/* 3rd card */}
                <motion.div 
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "17rem" }}
                transition={transition}
                style={{ left: '15rem', top: '17rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"Design"}
                        detail={"Firebase, FireStore, RestAPI, Google Maps,  SQLite, Authentication "}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>


            </div>
        </div>)
}

export default Services