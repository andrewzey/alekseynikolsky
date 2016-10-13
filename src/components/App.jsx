import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Research from './Research/Research';
import Statement from './Statement/Statement';
import Compositions from './Compositions';
import About from './About/About';
import Contact from './Contact/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    const activeSection = (window) ? window.location.pathname : '/';
    this.state = { activeSection };
  }

  handleSectionClick(sectionUrl) {
    this.setState({ activeSection: sectionUrl });
  }

  render() {
    const sections = [
      { displayName: 'Home', url: '/', component: Home },
      { displayName: 'Statement', url: '/statement', component: Statement },
      { displayName: 'Compositions', url: '/compositions', component: Compositions },
      { displayName: 'Research', url: '/research', component: Research },
      // TODO: after initial launch of website
      // { displayName: 'Method', url: '/method', component: Research },
      { displayName: 'About', url: '/about', component: About },
      { displayName: 'Contact', url: '/contact', component: Contact },
    ];

    const MatchWithCallback = ({ component:Component, ...rest }) => (
      <Match {...rest} render={(matchProps) => (
        <Component
          {...matchProps}
          handleSectionClick={(sectionUrl) =>
            this.handleSectionClick(sectionUrl)}
        />
      )}/>
    );

    const pageSections = sections.map(section => (
      <MatchWithCallback
        exactly
        pattern={section.url}
        component={section.component}
        key={section.url}
      />
    ));

    return (
      <BrowserRouter>
        <div>
          <Header
            sections={sections}
            activeSection={this.state.activeSection}
            handleSectionClick={(sectionUrl) =>
              this.handleSectionClick(sectionUrl)}
          />
          {pageSections}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
