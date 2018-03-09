import React, { Component } from 'react';
import Header from '../../Header/Header';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import ServicesSection from './HomeComponents/ServicesSection';
import ClientSection from './HomeComponents/ClientSection';
import NewsSection from './HomeComponents/NewsSection';
import PartnersSection from './HomeComponents/PartnersSection';
import Footer from '../../Footer/Footer';

class HomePage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render(){
    return (
      <div>
        <Header />
        <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ClientSection />
            <NewsSection />
            <PartnersSection />
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
