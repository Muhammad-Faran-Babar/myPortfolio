import React from 'react'
import './Footer.css'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt='' />
            <div className="f-content">
                <span>faribabar1998@gmail.com</span>
                <div className="f-icons">
                    <Instagram color='#b8b161' size='3rem' />
                    <Facebook color='#b8b161' size='3rem' />
                    <Github color='#b8b161' size='3rem' />
                </div>
            </div>
        </div>
    )
}
export default Footer