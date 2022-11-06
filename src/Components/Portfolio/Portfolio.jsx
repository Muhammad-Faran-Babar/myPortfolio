import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import DigitalWallet from "../../img/DigitalWallet.png";
import Crypto from "../../img/Crypto.png";
import FishFarm from "../../img/FishFarm.png";
import GooSee from "../../img/GooSee.png";
import ShazamWeather from "../../img/ShazamWeather.png";
import MyPortfolio from "../../img/myPortfolio.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : ' ' }}>
                Recent Projects
            </span>
            <span>
                Portfolio
            </span>
            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                 <SwiperSlide>
                    <a href='https://github.com/Muhammad-Faran-Babar/Fish-Farm-Management-System'>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        src={FishFarm} alt="" />
                        </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://github.com/Muhammad-Faran-Babar/GoSee'>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        src={GooSee} alt="" />
                        </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href=''>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        src={DigitalWallet} alt="" />
                        </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://github.com/Muhammad-Faran-Babar/CryptoPriceTracker'>
                    <motion.img
                        // style={{height: '14rem'}}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        src={Crypto} alt="" />
                </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://github.com/Muhammad-Faran-Babar/ShazamWeather'>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        src={ShazamWeather} alt="" />
                </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://github.com/Muhammad-Faran-Babar/myPortfolio'>
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.1 }}
                        src={MyPortfolio} alt="" />
               </a>
                </SwiperSlide>
               

            </Swiper>

        </div>
    )
}

export default Portfolio