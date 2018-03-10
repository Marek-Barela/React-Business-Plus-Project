import React, { Component } from 'react';
import ContactSection from './ContactComponents/ContactSection';

class ContactPage extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
        <main>
          <section className="hero__section--contact"></section>
          <ContactSection />
        </main>
    );
  }
}

export default ContactPage;
