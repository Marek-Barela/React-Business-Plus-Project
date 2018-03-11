import React, { Component } from "react";
import BlogSection from "./BlogComponents/BlogSection";

class BlogPage extends Component {
    componentDidMount () {
      window.scrollTo(0, 0)
    }
    render() {
    return (
    <main>
        <section className="hero__section--blog"></section>
        <BlogSection />
    </main>
    );
  }
}

export default BlogPage;
