import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

    return (
        <div className="n-wrapper">
            {/* left side  */}
            <div className="n-left">
                <div className="n-name">Faran</div>
                <Toggle />
            </div>


            {/* Right side  */}

            <div className="n-right">
                <div
                className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='active'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services'  smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Technologies' smooth={true}>
                            <li>Technologies</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Details' smooth={true}>
                            <li>Details</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>

                <button className='button'>
                    Contact
                </button>
                </Link>

            </div>
        </div>)
}

export default Navbar