import React, { Component } from "react";
import NewsSection from "./NewsComponents/NewsSection";

class NewsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <main>
        <section className="hero__section--news"></section>
        <NewsSection />
      </main>
    );
  }
}

export default NewsPage;
