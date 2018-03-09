import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

class BlogPage extends Component {
    componentDidMount () {
      window.scrollTo(0, 0)
    }
    render() {
    return (
        <div>
            <Header />
            <main>
                <section className="hero__section-blog">
                </section>
            </main>
            <Footer />
        </div>
    );
  }
}

export default BlogPage;
