import 'babel-polyfill';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router';
import MatchWithGA from './MatchWithGA/MatchWithGA';
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

export function logPageView() {
  if (window.location.host === "alekseynikolsky.com" ||
      window.location.host === "www.alekseynikolsky.com") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-31358068-3');

    // Add 'no-touch' class so we can define hover effects in CSS *only* for
    // devices that don't support touch.
    if (!("ontouchstart" in document.documentElement)) {
      document.documentElement.className += "no-touch";
    }
  }

  render() {
    const sections = [
      { displayName: 'Home', url: '/', component: Home },
      { displayName: 'Statement', url: '/statement', component: Statement },
      { displayName: 'Compositions', url: '/compositions', component: Compositions },
      { displayName: 'Research', url: '/research', component: Research },
      { displayName: 'Method', url: '/method', component: ComingSoon },
      { displayName: 'About', url: '/about', component: About },
      { displayName: 'Contact', url: '/contact', component: Contact },
    ];

    const pageSections = sections.map(section => {
      const shouldMatchExactly = (section.url === '/');
      return (
        <MatchWithGA
          exactly={shouldMatchExactly}
          pattern={section.url}
          component={section.component}
          key={section.url}
        />
      );
    });

    return (
      <BrowserRouter>
        <div>
          <Header sections={sections} />
          {pageSections}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
