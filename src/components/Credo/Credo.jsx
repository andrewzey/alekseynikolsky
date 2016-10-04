import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import './Credo.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_HERO } from '../../constants';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import HeroImage from '../../images/credo/credo-hero-school-of-athens.jpg'

const propTypes = {
  pathname: PropTypes.string,
};

const Credo = ({ pathname }) => {
  return (
    <div>
      <DocumentTitle title='Aleksey Nikolsky - Credo' />
      <Flex wrap justify="center">
        <Box col={12} sm={12} p={2} style={{position: 'relative'}}>
          <ResponsiveImage
            src={HeroImage}
            alt="Library filled with Books"
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
          />
          <HeroOverlay type="credo">
            <h3>Music Credo</h3>
            <p>It took me years to finally resolve a disconcerting contradiction which I experienced as an artist / musicologist, and as a consumer of music. I needed to understand what had caused the very clear faceted role of music that was functioning undisturbed for centuries in Western societies, to so quickly deteriorate with accelerating pace, especially in the past few decades. I could therefore see no point in living the life of a professional composer under such circumstances. In search of an answer, I temporarily put a halt on writing music until I would figure out what kind of music today’s culture needed.</p>
            <p>I quickly immersed myself into extensive studies of various fields of science, semiotics, biology, music history, comparative ethnomusicology, developmental epistemology, anthropology, and methodology of music, while trying to formulate an effective method of teaching music as a language. After finally having come to grasp with the quintessence of what contributed to the demise of classical music, it is only now that see a coherent picture of what constitutes a “normal” state of musical communication, which I would like to share with you.</p>
          </HeroOverlay>
        </Box>
        <Box col={12} sm={12} p={2}>
          <p>Lorem ipsum</p>
        </Box>
      </Flex>
    </div>
  );
};

Credo.propTypes = propTypes;

export default Credo;
