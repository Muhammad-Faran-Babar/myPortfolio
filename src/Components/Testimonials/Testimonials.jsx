 import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import DigitalWallet from "../../img/DigitalWallet.png";
import Crypto from "../../img/Crypto.png";
import FishFarm from "../../img/FishFarm.png";
import GooSee from "../../img/GooSee.png";
import ShazamWeather from "../../img/ShazamWeather.png";
import MyPortfolio from "../../img/myPortfolio.png";
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
const Testimonials = () => {
    const clients= [
        {
            img: FishFarm,
            name: 'Fish Farm Management System',
            review:
              " This App developed in React Native and Firebase. This app provides different Functionalities including Stock, Pond, Growth, Expenses, Fish Sales and Manage Staff and each provides its own Functionalities respectively.",
          },
          {
            img: Crypto,
            name: 'Crypto Price Tracker',
            review:
              "This App developed using JavaScript in React Native.	Coin Gecko API is used to get the latest data. React-native Animated Charts and Flat-list are implemented in this app and populated through API.Axios method is used for API calling to get crypto data.",
          },
          {
            img: DigitalWallet,
            name: 'Digital Wallet App',
            review:
              "Developed in React-Native, User Interface is designed via Figma. Navigation is provided through Stack Navigation and Bottom-Tab. QR-code scan option is also provided for payment method. RestCountry-API is used to get names and dial code of all countries.",
          },
          {
            img: GooSee,
            name: 'GoSee! App',
            review:
              "A User interface developed in React Native.Navigation is provided through Stack Navigation and Bottom-Tab NAvigation.Linear Gradient is used to make UI more eye-catching. React-Hooks used for state management.Flat-list is used to show the relative data.",
          },
          {
            img: ShazamWeather,
            name: 'Shazam Weather',
            review:
              "A User application is developed in React-Native. Stack Navigation is implemented in this project.On-Boarding Screen is provided. React Hooks are used for managing states. Data is fetched using OpenWeatherAPI with the Async-Await function.",
          },
    ]
  return (
    <di v className="t-wrapper" id='Details'>
        <div className="t-heading">
            <span> My Projects </span>
            <span>details</span>
            
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'var(--orange)'}}></div>
        </div>
        <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}

        >
            {clients.map((clients, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={clients.img} alt=''/>
                            <span>{clients.name}</span>
                            <span>{clients.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                        

                                        
                })}

        </Swiper>

    </di>

    )
}


export default Testimonials