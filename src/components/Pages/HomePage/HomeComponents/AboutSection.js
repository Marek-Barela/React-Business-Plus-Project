import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = (props) => {
    return (
      <section className='about__section--home'>
        <div className='about__container container'>
            <div className='row'>
                <div className="col-5">
                    <h3 className='section__header'>About us</h3>
                    <span className='section__subheading'>Our Short Story</span>
                </div>
                <div className='col-7'>
                    <p className='section__paragraph about__paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Link to='/About'><button className='btn section__button about__button'>read more</button></Link>
                </div>
            </div>
        </div>
      </section>
    );
  }

export default AboutSection;