import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import { IMAGE_HEIGHT_WIDTH_RATIO_HERO } from '../../constants'
import './Home.css';

import InfoBlock from '../InfoBlock/InfoBlock';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

import HeroImage from '../../images/home/home-hero-aleksey-18.jpg';
import ImageResearch from '../../images/home/home-copenhagen-dome.jpg';
import ImageCompositions from '../../images/home/home-inking-dancers.jpg';
import ImageCredo from '../../images/home/home-school-of-athens.jpg';

const Home = ({ pathname, handleClick }) => {
  const infoBlocks = [
    {
      title: 'Statement of Purpose',
      pageUrl: '/statement',
      description: "I believe that we live at a critical historical time where unprecendented technical progress has made it possible for anyone to make himself heard. Unfortunately, this often bypasses long-established standards of quality and purpose, thereby, eroding the order that had brought our civilization to where it is today. To restore music's capacity to speak to our hearts and minds, we must find a way to reconnect the broken bloodline of our heritage.",
      imageUrl: ImageCredo,
      imageAltText: 'Raphael School of Athens',
    },
    {
      title: 'Compositions',
      pageUrl: '/compositions',
      description: 'I started out as a modernistic composer. However, having discovered limitations of modernism and post-modernism, I set out to explore popular and folk music. Having realized that music operates in a siimilar way to language, I came to see that the approach of Baroque composers was generally right: one has to define the lexicon and the grammer of music before proceeding to execute its main function - the expression of emotions.',
      imageUrl: ImageCompositions,
      imageAltText: 'Fabulusions Inkings Dancers',
    },
    {
      title: 'Research',
      pageUrl: '/research',
      description: 'While interested in the scientific investigation of music, I look at music primarily as a composer: as to how the meaningful structural elements of music are put together in order to express a particular idea (emotional state, imagery, attitude, etc.). In this quest, I am interested in all kinds of music: from folk to popular, and from historic to modern classical. I look at all music through the prism of music theory, history, pyschology, anthropology, and sociology.',
      imageUrl: ImageResearch,
      imageAltText: 'Copenhagen Dome',
    },
  ];

  const InfoBlocks = infoBlocks.map((infoBlock, index) =>
    <InfoBlock
      {...infoBlock}
      handleSectionClick={handleClick}
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
        <Box col={12} sm={12} md={9} p={2} justify="center">
          <div className="credo">
            <h3>Credo</h3>
            <p>In the Beginning there was Music.</p>
            <p>The triumvirate of Musica Universalis, Musica Mundana, and Musica Humana was declared by the first civilizations, and upheld by the descendant cultures as the Order of the World. The music we hear is but a paradigm of Harmony that holds the universe - musical tone is a “sounding number” that expresses proportions between things material.</p>
            <p>Discovery of organic unity of three harmonies: that of the celestial spheres, of social relations, and of human mind - all embodied in a single concept of Music - marked the rise of the world as we know it today. And the oblivion to this unity in the last few centuries does not take it away. Whether or not we are aware of it, our lives are still governed by Music - in the same way it used to be before the dawn of civilization in prehistoric times.</p>
            <p>The physical properties of music determine its biological properties that shape humanity by mediating the individual minds. Living one’s life in harmony with Music is the secret that was well known to our distant ancestors who lived in peace and knew no wars. The tragic loss of this secret brought about a cascade of never-ending warfare. The more esoteric became the art of living in harmony with Music, the further away outspread the social and mental disharmony and tension, culminating in two World Wars that shook the world and made the prospect of the Third WW Apocalyptic.</p>
            <p>Learning to hear Music and recognizing true music from false music is the panacea from much tribulation that overwhelms our lives today.</p>
            <p className="credo__signature"> - Aleksey Nikolsky, October 10, 2016</p>
          </div>
        </Box>
        {InfoBlocks}
      </Flex>
    </div>
  );
};

Home.propTypes = {
  pathname: PropTypes.string,
};

export default Home;
