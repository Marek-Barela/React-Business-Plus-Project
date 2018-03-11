import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import logo from './../Images/Business-Plus.png'
import phone from './../Images/phone-icon.png'

const Header = (props) => {
    return(
      <header className="header">
        <div className='header__container container'>
            <div className='header__logo'>
                <Link to='/'><img className='logo' src={logo} alt='business plus' /></Link>
                <span className='logo__item'></span>
                <img src={phone} alt='Call to us'/>
                <p>+9978 8856 999</p>           
            </div>
            <Navigation className='header__navigation' />
            <button className="header__navigation--hamburger hamburger hamburger--spin" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
        </div>
      </header>
    );
  }

export default Header;