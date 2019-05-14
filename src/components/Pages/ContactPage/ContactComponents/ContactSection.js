import React from "react";
import phone from "../../../Images/phone-icon.png";
import layer from "../../../Images/contact-page-layer.png";

const ContactSection = (props) => {
	return (
		<section className="contact-page__section">
			<div className="contact-page__container container">
				<header>
					<h3 className="section__header">Get in touch</h3>
					<p className="section__subheading">Feel free to contact us</p>
				</header>
				<div className="contact__details">
					<div className="details__phone-box">
						<img src={phone} alt="phone" />
						<p>+ 9978 8856 999</p>
					</div>
					<div className="detail__email-box">
						<p>info@businessplus.com</p>
					</div>
				</div>
				<div className="contact__image-container">
					<img src={layer} alt="contact" />
					<div className="image-container__content">
						<h3 className="section__header contact-content__header">Canada</h3>
						<p className="section__paragraph contact-content__paragraph">100 Mission St, Canada street, Second flor 8878</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;