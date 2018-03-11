import React from "react";
import logo1 from "../../../Images/partners-icon-one.png";
import logo2 from "../../../Images/partners-icon-two.png";
import logo3 from "../../../Images/partners-icon-three.png";
import logo4 from "../../../Images/partners-icon-four.png";
import logo5 from "../../../Images/partners-icon-five.png";
import logo6 from "../../../Images/partners-icon-six.png";
import pyramids from "../../../Images/pyramid-shape.png";

const PartnersSection = (props) => {
    return (
      <section className="partners__section--home">
        <div className="partners__container--home container">
            <div className="row">
                <div className="col-12">
                    <h5 className="section__header">Partners</h5>
                    <span className="section__subheading">Our Great Partners</span>
                </div>
                <div className="col-12">
                    <div className="col-2 col-4-lg col-4-md logo__container">
                        <img src={logo1} alt="Beerbeer"/>
                    </div>
                    <div className="col-2 col-4-lg col-4-md logo__container">
                        <img src={logo2} alt="Prestiges"/>
                    </div>
                    <div className="col-2 col-4-lg col-4-md logo__container">
                        <img src={logo3} alt="Deerbrand"/>
                    </div>
                    <div className="col-2 col-4-lg col-4-md logo__container">
                        <img src={logo4} alt="Genuine"/>
                    </div>
                    <div className="col-2 col-4-lg col-4-md logo__container">
                        <img src={logo5} alt="Retrobrand"/>
                    </div>
                    <div className="col-2 col-4-lg col-4-md logo__container">
                        <img src={logo6} alt="Retrodesign"/>
                    </div>
                </div>
            </div>
            <img className="pyramids__shape--home" src={pyramids} alt="pyramids"/>
        </div>
      </section>
    );
  }

export default PartnersSection;