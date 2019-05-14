import React, { Component } from "react";
import HeroSection from "./AboutComponents/HeroSection";
import AboutSection from "./AboutComponents/AboutSection";
import ViewsSection from "./AboutComponents/ViewsSection";

class AboutPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<main>
				<HeroSection />
				<AboutSection />
				<ViewsSection />
			</main>
		);
	}
}
export default AboutPage;
