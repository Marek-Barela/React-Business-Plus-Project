import React, { Component } from "react";
import HeroSection from "./HomeComponents/HeroSection";
import AboutSection from "./HomeComponents/AboutSection";
import ServicesSection from "./HomeComponents/ServicesSection";
import ClientSection from "./HomeComponents/ClientSection";
import NewsSection from "./HomeComponents/NewsSection";
import PartnersSection from "./HomeComponents/PartnersSection";

class HomePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientSection />
        <NewsSection />
        <PartnersSection />
      </main>
    );
  }
}

export default HomePage;
