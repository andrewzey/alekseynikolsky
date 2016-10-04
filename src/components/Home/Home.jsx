import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import { IMAGE_HEIGHT_WIDTH_RATIO_HERO } from '../../constants'

import InfoBlock from '../InfoBlock/InfoBlock';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ContactForm from '../ContactForm/ContactForm';

import HeroImage from '../../images/home/home-hero-aleksey-18.jpg';
import ImageResearch from '../../images/home/home-copenhagen-dome.jpg';
import ImageCompositions from '../../images/home/home-inking-dancers.jpg';
import ImageCredo from '../../images/home/home-school-of-athens.jpg';

const Home = ({ pathname, handleSectionClick }) => {
  const infoBlocks = [
    {
      title: 'Research',
      pageUrl: '/research',
      description: 'While interested in the scientific investigation of music, I look at music primarily as a composer: as to how the meaningful structural elements of music are put together in order to express a particular idea (emotional state, imagery, attitude, etc.). In this quest, I am interested in all kinds of music: from folk to popular, and from historic to modern classical. I look at all music through the prism of music theory, history, pyschology, anthropology, and sociology.',
      imageUrl: ImageResearch,
      imageAltText: 'Copenhagen Dome',
    },
    {
      title: 'Compositions',
      pageUrl: '/compositions',
      description: 'I started out as a modernistic composer. However, having discovered limitations of modernism and post-modernism, I set out to explore popular and folk music. Having realized that music operates in a siimilar way to language, I came to see that the approach of Baroque composers was generally right: one has to define the lexicon and the grammer of music before proceeding to execute its main function - the expression of emotions.',
      imageUrl: ImageCompositions,
      imageAltText: 'Fabulusions Inkings Dancers',
    },
    {
      title: 'Music Credo',
      pageUrl: '/credo',
      description: "I believe that we live at a critical historical time where unprecendented technical progress has made it possible for anyone to make himself heard. Unfortunately, this often bypasses long-established standards of quality and purpose, thereby, eroding the order that had brought our civilization to where it is today. To restore music's capacity to speak to our hearts and minds, we must find a way to reconnect the broken bloodline of our heritage.",
      imageUrl: ImageCredo,
      imageAltText: 'Raphael School of Athens',
    },
  ];

  const InfoBlocks = infoBlocks.map((infoBlock, index) =>
    <InfoBlock
      {...infoBlock}
      handleSectionClick={handleSectionClick}
      key={index}
    />
  );

  return (
    <div>
      <DocumentTitle title='Aleksey Nikolsky - Composer, Scientist' />
      <Flex wrap justify="center">
        <Box col={12} sm={12} p={2}>
          <ResponsiveImage
            src={HeroImage}
            alt="Aleksey Nikolsky on Steps of Walt Disney Hall"
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
          />
        </Box>
        {InfoBlocks}
        <Box col={12} sm={12} lg={8} p={2}>
          <h3>Contact Aleksey</h3>
          <ContactForm />
        </Box>
      </Flex>
    </div>
  );
};

Home.propTypes = {
  pathname: PropTypes.string,
};

export default Home;
