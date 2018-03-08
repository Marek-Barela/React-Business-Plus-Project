import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const NewsPage = (props) => {
    return (
        <div>
            <Header />
            <main>
                <section className="hero__section-news">
                </section>
            </main>
            <Footer />
        </div>
    );
  }

export default NewsPage;
