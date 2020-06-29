import styled from '@emotion/styled/macro';
import React from 'react';
import {Link} from 'react-router-dom';
import {logNavClick} from '../analytics';
import Navigation from './Navigation';
import {Sections} from '../propTypes';
import {Heading1} from './common';

const HeaderTitle = styled.div({
  textAlign: 'center',
});

export default class Header extends React.Component {
  static propTypes = {
    sections: Sections,
  };

  render() {
    const {sections} = this.props;
    const homeSection = sections.find(section => section.displayName = 'Home');

    return (
      <header>
        <HeaderTitle>
          <Link to={homeSection.path} onClick={() => logNavClick({path: homeSection.path})}>
            <Heading1>Aleksey Nikolsky</Heading1>
          </Link>
        </HeaderTitle>
        <Navigation {...{sections}} />
      </header>
    );
  }
}
