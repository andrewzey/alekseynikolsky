import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import './App.css';

import Header from './Header';
import Home from './Home';
import Research from './Research';
import Credo from './Credo';
import Compositions from './Compositions';
import About from './About';
import Contact from './Contact';

// const baseClass = 'App';

class App extends Component {
  constructor(props) {
    super(props);
    const activeSection = (window) ? window.location.pathname : '/';
    this.state = { activeSection };
  }

  handleSectionClick(sectionDisplayName) {
    this.setState({ activeSection: sectionDisplayName });
  }

  render() {
    const sections = [
      { displayName: 'Home', url: '/', component: Home },
      { displayName: 'Research', url: '/research', component: Research },
      { displayName: 'Credo', url: '/credo', component: Credo },
      { displayName: 'Compositions', url: '/compositions', component: Compositions },
      { displayName: 'About', url: '/about', component: About },
      { displayName: 'Contact', url: '/contact', component: Contact },
    ];

    const pageSections = sections.map(section => (
      <Match
        exactly
        pattern={section.url}
        component={section.component}
        key={section.displayName}
      />
    ));

    return (
      <BrowserRouter>
        <div>
          <Header
            sections={sections}
            activeSection={this.state.activeSection}
            handleSectionClick={(sectionDisplayName) =>
              this.handleSectionClick(sectionDisplayName)}/>
          {pageSections}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
