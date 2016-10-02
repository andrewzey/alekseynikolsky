import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import InfoBlock from '../InfoBlock/InfoBlock';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import ContactForm from '../ContactForm/ContactForm';

import HeroImage from '../../images/home-hero-aleksey-18.jpg';
import ImageResearch from '../../images/home-copenhagen-dome.jpg';
import ImageCompositions from '../../images/home-inking-dancers.jpg';
import ImageCredo from '../../images/home-school-of-athens.jpg';

const Home = ({ pathname, handleSectionClick }) => {
  const infoBlocks = [
    {
      title: 'Research',
      pageUrl: '/research',
      description: 'While interested in the scientific investigation of music, I look at music primarily as a composer: as to how the meaningful strucural elemnts of music are put together in order to express a particular idea (emotional state, imagery, attitude, etc.). In this quest, I am interested in all kinds of music: from folk to popular, and from historic to modern classical. I look at all music through the prism of music theory, history, pyschology, anthropology, and sociology.',
      imageUrl: ImageResearch,
      imageAltText: 'Copenhagen Dome',
    },
    {
      title: 'Compositions',
      pageUrl: '/compositions',
      description: 'I started out as a modernistic composer. However, having discovered limitations of modernism and post-modernism, I set out to explore the music popular and folk types. Having realized that music operates in a siimilar way to language, I came to see that the approach of Baroque composers generally right: one has to define the lexicon and the grammer of music before proceeding to execute its main function - the expression of emotions.',
      imageUrl: ImageCompositions,
      imageAltText: 'Fabulusions Inkings Dancers',
    },
    {
      title: 'Music Credo',
      pageUrl: '/credo',
      description: 'I believe that we live at a critical historical time where unprecendented technical achievements have made it possible for anyone to make himself heard. This has long-established conventions, thereby, eroding the order that had brought our civilization to where it is today Our challenege, therefore, is to find a way to reconnect to our roots so that the broken bloodline of our heritage restores its function and begins to distribute the nourishment we, as a human culture, are severely starved for.',
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
          <ResponsiveImage src={HeroImage} alt="Aleksey Nikolsky on Steps of Walt Disney Hall" />
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
