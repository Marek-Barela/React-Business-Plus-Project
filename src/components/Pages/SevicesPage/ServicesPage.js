import React, { Component } from "react";
import HeroSection from "./ServicesComponents/HeroSection";
import ServicesSection from "./ServicesComponents/ServicesSection";
import ClientSection from "../HomePage/HomeComponents/ClientSection";

class ServicesPage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
        <main>
          <HeroSection />
          <ServicesSection />
          <div className="client-component-Background">
            <ClientSection />
          </div>
        </main>
    );
  }
}

export default ServicesPage;
