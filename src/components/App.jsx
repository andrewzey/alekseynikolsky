import 'babel-polyfill';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router';
import MatchWithCallback from './MatchWithCallback/MatchWithCallback';
import ReactGA from 'react-ga';

import './App.css';

import ComingSoon from './ComingSoon/ComingSoon';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Research from './Research/Research';
import Statement from './Statement/Statement';
import Compositions from './Compositions/Compositions';
import About from './About/About';
import Contact from './Contact/Contact';

class App extends Component {
  logPageView() {
    if (window.location.host === "alekseynikolsky.com" ||
        window.location.host === "www.alekseynikolsky.com") {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    }
  }

  handleRoutingClick(sectionUrl) {
    window.scrollTo(0, 0);
    // Ensure that window.location.pathname is updated before logging page view
    setTimeout(() => this.logPageView(), 0);
  }

  componentDidMount() {
    ReactGA.initialize('UA-31358068-3');
    this.logPageView();
  }

  render() {
    const sections = [
      { displayName: 'Home', url: '/', component: Home },
      { displayName: 'Statement', url: '/statement', component: Statement },
      { displayName: 'Compositions', url: '/compositions', component: Compositions },
      { displayName: 'Research', url: '/research', component: Research },
      // TODO: after initial launch of website
      { displayName: 'Method', url: '/method', component: ComingSoon },
      { displayName: 'About', url: '/about', component: About },
      { displayName: 'Contact', url: '/contact', component: Contact },
    ];

    const pageSections = sections.map(section => {
      const shouldMatchExactly = (section.url === '/');
      return (
        <MatchWithCallback
          exactly={shouldMatchExactly}
          pattern={section.url}
          component={section.component}
          callback={() => this.handleRoutingClick()}
          key={section.url}
        />
      );
    });

    return (
      <BrowserRouter>
        <div>
          <Header
            sections={sections}
            handleSectionClick={() => this.handleRoutingClick()}
          />
          {pageSections}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
