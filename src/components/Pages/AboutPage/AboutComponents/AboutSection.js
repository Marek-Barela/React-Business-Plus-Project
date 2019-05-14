import React from "react";
import aboutImg from "../../../Images/about-image.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
	return (
		<section className="about__section--about">
			<div className="about__container--about container">
				<div className="row">
					<div className="col-12">
						<header>
							<h3 className="section__header">About us</h3>
							<span className="section__subheading">Our Short Story</span>
						</header>
						<p className="section__paragraph about__paragraph--about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<div className="about__image-container--about">
							<img src={aboutImg} alt="About Us" />
							<div className="button__container--about">
								<Link to="/Contact"><button className="btn section__button">Lets Talk</button></Link>
								<Link to="/Services"><button className="btn section__button">Clients</button></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
