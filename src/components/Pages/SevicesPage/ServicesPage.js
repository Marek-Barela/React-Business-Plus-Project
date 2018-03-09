import React, { Component } from 'react';
import Header from '../../Header/Header';
import HeroSection from './ServicesComponents/HeroSection';
import ServicesSection from './ServicesComponents/ServicesSection';
import ClientSection from '../HomePage/HomeComponents/ClientSection';
import Footer from '../../Footer/Footer';

class ServicesPage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <div className="client-component-Background">
            <ClientSection />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
