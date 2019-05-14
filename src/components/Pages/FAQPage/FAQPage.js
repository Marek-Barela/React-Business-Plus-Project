import React, { Component } from "react";
import FAQSection from "./FAQComponents/FAQSection";

class FAQPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <main>
        <section className="hero__section-FAQ"></section>
        <FAQSection />
      </main>
    );
  }
}
export default FAQPage;
