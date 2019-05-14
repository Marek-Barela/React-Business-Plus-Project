import React from "react";
import rocked from "../../../Images/rocket-icon.png";
import support from "../../../Images/support-icon.png";
import analyzing from "../../../Images/analyzing-icon.png";
import clock from "../../../Images/clock-icon.png";
import pyramids from "../../../Images/pyramid-shape.png";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="services__section--home">
      <div className="services__container--home container">
        <div className="row">
          <div className="col-12 services__column-12--home">
            <header>
              <h3 className="section__header">Services</h3>
              <span className="section__subheading">What we are doing</span>
            </header>
          </div>
          <div className="col-6 col-12-md col-12-sm">
            <div className="section__item--home">
              <div className="item__icon--home">
                <img src={rocked} alt="Rocked" />
              </div>
              <div className="item__content--home">
                <h5 className="item__header--home">Boosting your business</h5>
                <p className="section__paragraph item__paragraph--home">Lorem Ipsum is simply dummy text of the printing and industry
                  Lorem Ipsum has been the industry"s standard dummy text.</p>
              </div>
            </div>
            <div className="section__item--home">
              <div className="item__icon--home">
                <img src={analyzing} alt="analyzing" />
              </div>
              <div className="item__content--home">
                <h5 className="item__header--home">analyzing business strategy</h5>
                <p className="section__paragraph item__paragraph--home">Lorem Ipsum is simply dummy text of the printing and industry
                  Lorem Ipsum has been the industry"s standard dummy text.</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-12-md col-12-sm">
            <div className="section__item--home">
              <div className="item__icon--home">
                <img src={support} alt="support" />
              </div>
              <div className="item__content--home">
                <h5 className="item__header--home">Online support</h5>
                <p className="section__paragraph item__paragraph--home">Lorem Ipsum is simply dummy text of the printing and industry
                  Lorem Ipsum has been the industry"s standard dummy text.</p>
              </div>
            </div>
            <div className="section__item--home">
              <div className="item__icon--home">
                <img src={clock} alt="clock" />
              </div>
              <div className="item__content--home">
                <h5 className="item__header--home">Time managment</h5>
                <p className="section__paragraph item__paragraph--home">Lorem Ipsum is simply dummy text of the printing and industry
                  Lorem Ipsum has been the industry"s standard dummy text.</p>
              </div>
            </div>
          </div>
          <Link to="/Services"><button className="btn section__button service__button--home">read more</button></Link>
          <img className="service__pyramids--home" src={pyramids} alt="Pyramids" />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;