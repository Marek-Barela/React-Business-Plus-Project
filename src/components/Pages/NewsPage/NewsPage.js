import React, { Component } from 'react';
import Header from '../../Header/Header';
import NewsSection from './NewsComponents/NewsSection';
import Footer from '../../Footer/Footer';

class NewsPage extends Component {
    componentDidMount () {
      window.scrollTo(0, 0)
    }
    render() {
    return (
        <div>
            <Header />
            <main>
                <section className="hero__section--news"></section>
                <NewsSection />
            </main>
            <Footer />
        </div>
    );
  }
}

export default NewsPage;
