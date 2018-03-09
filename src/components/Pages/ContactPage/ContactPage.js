import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class ContactPage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <Header />
        <main>

        </main>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
