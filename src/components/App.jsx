import 'core-js/stable';

import {Global} from '@emotion/core';
import css from '@emotion/css/macro';
import styled from '@emotion/styled/macro';
import emotionReset from 'emotion-reset';
import {ThemeProvider} from 'emotion-theming';
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {theme, LINK_COLOR, SITE_MIN_WIDTH} from '../styles';
import About from './About';
import Method from './Method';
import Compositions from './Compositions/Compositions';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Research from './Research/Research';
import Route from './Route';
import Statement from './Statement';
import {Switch} from 'react-router-dom';

const PageWrapper = styled.div({
  minWidth: SITE_MIN_WIDTH,
  maxWidth: '980px',
  padding: '2em',
  margin: '0 auto 0',
  // Get rid of horizontal scrollbar because some elements use width: 100vw
  overflowX: 'hidden',
});

const sections = [
  {displayName: 'Home', path: '/', component: Home, exact: true},
  {displayName: 'Statement', path: '/statement', component: Statement, exact: false},
  {displayName: 'Compositions', path: '/compositions', component: Compositions, exact: false},
  {displayName: 'Research', path: '/research', component: Research, exact: false},
  // {displayName: 'Method', path: '/method', component: Method, exact: false},
  {displayName: 'About', path: '/about', component: About, exact: false},
  {displayName: 'Contact', path: '/contact', component: Contact, exact: false},
];

class App extends Component {
  render() {
    const pageSections = sections.map(section => {
      return (
        <Route
          exact={section.exact}
          path={section.path}
          component={section.component}
          key={section.path}
        / >
      );
    });

    return (
      <BrowserRouter>
        <Global styles={css`
          ${emotionReset}

          a {
            text-decoration: none;
            color: ${LINK_COLOR};
          }
        `} />

        <ThemeProvider theme={theme}>
          <PageWrapper>
            <Header sections={sections} />
            <Switch>
              {pageSections}
            </Switch>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
