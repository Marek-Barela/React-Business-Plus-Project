import React from "react";
import servicesOne from "../../../Images/services-image-one.png";
import servicesTwo from "../../../Images/services-image-two.png";
import servicesthree from "../../../Images/services-image-three.png";
import servicesFour from "../../../Images/services-image-four.png";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
	return (
		<section className="services__section--services">
			<div className="services__container--services container">
				<div className="row">
					<header>
						<h3 className="section__header">Service</h3>
						<p className="section__subheading">Our Products</p>
					</header>
					<div className="col-6 col-12-sm">
						<article className="services__article">
							<img src={servicesOne} alt="aricle" />
							<h5 className="article__header services-article__header">Boosting your business</h5>
							<p className="article__paragraph services-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
							<Link to="/Contact"><button className="btn section__button services-article__button">Contact Us</button></Link>
						</article>
					</div>
					<div className="col-6 col-12-sm">
						<article className="services__article">
							<img src={servicesTwo} alt="aricle" />
							<h5 className="article__header services-article__header">Online support</h5>
							<p className="article__paragraph services-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
							<Link to="/Contact"><button className="btn section__button services-article__button">Contact Us</button></Link>
						</article>
					</div>
					<div className="col-6 col-12-sm">
						<article className="services__article">
							<img src={servicesthree} alt="aricle" />
							<h5 className="article__header services-article__header">analyzing business strategy</h5>
							<p className="article__paragraph services-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
							<Link to="/Contact"><button className="btn section__button services-article__button">Contact Us</button></Link>
						</article>
					</div>
					<div className="col-6 col-12-sm">
						<article className="services__article">
							<img src={servicesFour} alt="aricle" />
							<h5 className="article__header services-article__header">Time managment</h5>
							<p className="article__paragraph services-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
							<Link to="/Contact"><button className="btn section__button services-article__button">Contact Us</button></Link>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
