import styled from '@emotion/styled';
import React from 'react';
import {Par} from './common';

const Wrapper = styled.div({
  textAlign: 'center',
  fontSize: '1.5rem',
  paddingTop: '2rem',
  paddingBottom: '2rem',
});

const ComingSoon = () => {
  return (
    <Wrapper>
      <Par>This page is under development.</Par>
      <br />
      <Par>Check back soon!</Par>
    </Wrapper>
  );
};

export default ComingSoon;
