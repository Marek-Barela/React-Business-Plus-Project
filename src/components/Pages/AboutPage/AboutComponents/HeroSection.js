import React, { Component } from 'react';

const HeroSection = (props) => {
    return (
      <section className='hero__section--home'>
        <div className='hero__container container'>
          <div className='hero__content'>
            <span>Welcome to</span>
              <h1 className='hero__header'>Business plus</h1>
              <p className='hero__paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry
              Lorem Ipsum has been the industry's standard dummy text ever.</p>
              <button className='btn hero__button'>Read More</button>
          </div>
        </div>
      </section>
    );
  }

export default HeroSection;
