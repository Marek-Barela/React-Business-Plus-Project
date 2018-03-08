import React, { Component } from 'react';
import Header from '../../Header/Header';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import ServicesSection from './HomeComponents/ServicesSection';
import ClientSection from './HomeComponents/ClientSection';
import NewsSection from './HomeComponents/NewsSection';
import PartnersSection from './HomeComponents/PartnersSection';
import Footer from '../../Footer/Footer';

const HomePage = (props) => {
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

export default HomePage;
