import React from 'react';
import logo from '../Images/Business-Plus.png';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer>
            <div className='footer__container container'>
                <div className='row'>
                    <div className='col-6 col-12-md'>
                        <div className='col-6 col-12-md footer__logo'>
                            <Link to="/"><img src={logo} alt="Logo"/></Link>
                            <p className='logo__paragraph'>2015 © lawyer.</p>
                            <div className='footer__media'>
                                <div className='media__item'>
                                    <a href="https://www.facebook.com/" rel='noopener noreferrer' target='_black'><span className="fab fa-facebook-f"></span></a>
                                </div>
                                <div className='media__item'>
                                    <a href="https://plus.google.com/" rel='noopener noreferrer' target='_black'> <span className="fab fa-google-plus-g"></span></a>
                                </div>
                                <div className='media__item'>
                                    <a href="https://twitter.com/" rel='noopener noreferrer' target='_black'><span className="fab fa-twitter"></span></a>
                                </div>
                                <div className='media__item'>
                                    <a href="https://www.linkedin.com/" rel='noopener noreferrer' target='_black'><span className="fab fa-linkedin-in"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 navigation__column'>
                            <h3 className='footer__header'>Navigation</h3>
                            <Navigation className='footer__navigation' />
                        </div>
                    </div>
                    <div className='col-6 contact__column'>
                        <h3 className='footer__header'>Quick contact us</h3>
                        <form className='footer__form' action='#'>
                            <input type='text' autoComplete="text" placeholder='Name *' />
                            <input type='email' autoComplete="email" placeholder='Email *' />
                            <textarea name='text' placeholder='Comment *' cols='40' rows='3'></textarea>
                            <input className='btn section__button footer__button' type='submit' value='Submit Now'/>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

export default Footer;