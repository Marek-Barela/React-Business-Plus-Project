import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ServicesPage from './components/Pages/SevicesPage/ServicesPage';
import NewsPage from './components/Pages/NewsPage/NewsPage';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import BlogArticleOne from './components/Pages/BlogPage/BlogArticles/BlogArticleOne';
import BlogArticleTwo from './components/Pages/BlogPage/BlogArticles/BlogArticleTwo';
import BlogArticleThree from './components/Pages/BlogPage/BlogArticles/BlogArticleThree';
import FAQPage from './components/Pages/FAQPage/FAQPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Services" component={ServicesPage} />
          <Route path="/News" component={NewsPage} />
          <Route path="/Blog" exact component={BlogPage} />
          <Route path="/FAQ" component={FAQPage} />
          <Route path="/Contact" component={ContactPage} />
            <Route path="/Blog/Article-1" component={BlogArticleOne} />
            <Route path="/Blog/Article-2" component={BlogArticleTwo} />
            <Route path="/Blog/Article-3" component={BlogArticleThree} />
          <Footer />
      </div>
    );
  }
}

export default App;
