import React from 'react'
import './Works.css'
import IconFirbase from "../../img/firebase-logo.png";
import IconReact from "../../img/icon4.png";
import IconHtml from "../../img/HTMLicon.png";
import IconCSS from "../../img/CSSicon.png";
import IconJavascript from "../../img/javaScripticon.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works" id='Technologies'>
            <div className="awesome">
                <span style={{color: darkMode? 'white': ' '}}>
                    Work with These
                </span>
                <span>
                    Technologies
                </span>
                <span>
                    I am Team Player, Adaptive, have Good Communication Skills, and Self-Motivated.<br />
                    I am Passionate about React Development and Learning new Technologies and Ways to be better than Yesterday.<br/> 
                    The technologies I have work with are as follow: <br />
                   
                </span>
                <button className='button s-button' > Download CV</button>
                
                <div className="blur s-blur1" style={{ background: "#f8c7a2" }}></div>


            </div>
            {/* Right Side */}
            <div className="w-right">
                <motion.div
                          initial={{ rotate: 80 }}
                          whileInView={{ rotate:0 }}
                          viewport={{ margin: "-40px" }}
                          transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle">
                
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                    className="w-secCircle">
                        <img src={IconFirbase} alt=''/>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                    className="w-secCircle">
                        <img src={IconHtml} alt=''/>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                    className="w-secCircle">
                        <img src={IconReact} alt=''/>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                    className="w-secCircle">
                        <img src={IconCSS} alt=''/>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                    className="w-secCircle">
                        <img src={IconJavascript} alt=''/>
                    </motion.div> 
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>

        </div>
    )
}

export default Works