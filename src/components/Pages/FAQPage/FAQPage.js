import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class FAQPage extends Component {
    componentDidMount () {
      window.scrollTo(0, 0)
    }
    render() {
    return (
        <div>
            <Header />
            <main>
                <section className="hero__section-FAQ">
                </section>
            </main>
            <Footer />
        </div>
    );
  }
}
export default FAQPage;
