import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero__section--home">
      <div className="hero__container--home container">
        <div className="hero__content--home">
          <span>Welcome to</span>
          <header>
            <h1 className="hero__header--home">Business plus</h1>
            <p className="hero__paragraph--home">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                Lorem Ipsum has been the industry"s standard dummy text ever.</p>
          </header>
          <Link to="/Services"><button className="btn hero__button--home">Read More</button></Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
