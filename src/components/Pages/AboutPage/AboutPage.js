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
            <div>
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ViewsSection />
                </main>
                <Footer />
            </div>
        );
    }
}
export default AboutPage;
