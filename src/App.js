import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ServicesPage from './components/Pages/SevicesPage/ServicesPage';
import NewsPage from './components/Pages/NewsPage/NewsPage';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import FAQPage from './components/Pages/FAQPage/FAQPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';

import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/About" exact component={AboutPage} />
          <Route path="/Services" exact component={ServicesPage} />
          <Route path="/News" exact component={NewsPage} />
          <Route path="/Blog" exact component={BlogPage} />
          <Route path="/FAQ" exact component={FAQPage} />
          <Route path="/Contact" exact component={ContactPage} />
      </div>
    );
  }
}

export default App;
