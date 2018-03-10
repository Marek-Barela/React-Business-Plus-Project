import React, { Component } from 'react';
import Header from '../../Header/Header';
import HeroSection from './AboutComponents/HeroSection';
import AboutSection from './AboutComponents/AboutSection';
import ViewsSection from './AboutComponents/ViewsSection';
import Footer from '../../Footer/Footer';

class AboutPage extends Component {
    componentDidMount () {
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
