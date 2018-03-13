import React from "react";
import viewsOne from "../../../Images/views-image-one.png";
import viewsTwo from "../../../Images/views-image-two.png";
import pyramids from "../../../Images/pyramid-shape.png";

const ViewsSection = (props) => {
    return (
      <section className="views__section">
        <div className="views__container container">
            <header>
                <h3 className="section__header">Our views</h3>
                <p className="section__subheading">Our Conceptss</p>
            </header>
            <img className="views__pyramids" src={pyramids} alt="pyramids"/>
            <div className="row">
                <div className="col-12 views__top-column">
                    <div className="views__image-container">
                        <img src={viewsOne} alt="mission"/>
                    </div>
                    <div className="col-9 col-12-lg col-12-md col-12-sm">
                        <h5 className="views-column__header">Our Mission</h5>
                        <p className="views-column__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
                    </div>
                </div>
                <div className="col-12 views__bottom-column">
                    <div className="col-9 col-12-lg col-12-md col-12-sm">
                        <h5 className="views-column__header">Our vision</h5>
                        <p className="views-column__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
                    </div>
                    <div className="views__image-container">
                        <img src={viewsTwo} alt="mission"/>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }

export default ViewsSection;
