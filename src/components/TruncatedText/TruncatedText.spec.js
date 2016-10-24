import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TruncatedText from './TruncatedText';

describe('<TruncatedText />', () => {

  const createComponent = (props) => {
    return mount(<TruncatedText { ...props } />);
  };

  describe('#render', () => {
    it('should render non-expandable text', function() {
      const component = createComponent({ text: 'hello', length: 100 });
      expect(component).to.exist;
      expect(component.text()).to.equal('hello');
    });

    it('should render an expandable text', function() {
      const component = createComponent({ text: 'hello', length: 1, expandable: true });
      expect(component.text()).to.equal('h... more');
    });

    it('should render an non-expandable text which is not truncated', function() {
      const component = createComponent({ text: 'hello', length: 1 });
      expect(component.text()).to.equal('hello');
    });
  });
});