import React from 'react';
import {Helmet} from 'react-helmet';
import {Box, Flex} from 'rebass';
import {IMAGE_HEIGHT_WIDTH_RATIO_HERO, IMAGE_HEIGHT_WIDTH_RATIO_INFO_BLOCK} from '../constants';
import ImageResearch from '../images/home/home-copenhagen-dome.jpg';
import HeroImage from '../images/home/home-hero-aleksey-18.jpg';
import ImageCompositions from '../images/home/home-inking-dancers.jpg';
import ImageCredo from '../images/home/home-school-of-athens.jpg';
import ResponsiveImage from './ResponsiveImage';
import {Heading3, Par} from './common';
import styled from '@emotion/styled/macro';
import {logNavClick, GA_CATEGORY} from '../analytics';
import {LINK_COLOR, MEDIA_QUERIES} from '../styles';
import {NavLink} from 'react-router-dom';

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
    description: 'While interested in the scientific investigation of music, I look at music primarily as a composer: as to how the meaningful structural elements of music are put together to express a particular idea (emotional state, imagery, attitude, etc.). In this quest, I am interested in all kinds of music: from folk to popular, and from historic to modern classical. I look at all music through the prism of music theory, history, psychology, anthropology, sociology, and biology.',
    imageUrl: ImageResearch,
    imageAltText: 'Copenhagen Dome',
  },
];

const PageWrapper = styled.div({});
const CredoWrapper = styled.div({});
const CredoPar = styled(Par)({
  paddingBottom: '1em',
});
const CredoSignature = styled(Par)({
  fontWeight: 'bold',
  textAlign: 'center',
});
const ImageWrapper = styled.div({
  display: 'block',
  [MEDIA_QUERIES.breakpoints[0]]: {
    display: 'none',
  },
});
const StyledBox = styled(Box)({
  textAlign: 'justify',
  fontSize: '0.9rem',
});

const StyledNavLink = styled(NavLink)({
  color: LINK_COLOR,
  [MEDIA_QUERIES.hover]: {
    '&:hover': {
      textDecoration: 'underline',
    }
  },
});


const InfoBlock = ({title, pageUrl, description, imageUrl, imageAltText}) => {
  return (
    <StyledBox
      width={[12/12, 4/12, 4/12]}
      padding={2}
    >
      <StyledNavLink
        to={pageUrl}
        onClick={() => {
          logNavClick({path: pageUrl, category: GA_CATEGORY.INTERNAL_LINK});
          window.scrollTo(0, 0);
        }}
      >
        <ImageWrapper>
          <ResponsiveImage
            src={imageUrl}
            alt={imageAltText}
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_INFO_BLOCK}
          />
        </ImageWrapper>
        <Heading3>{title}</Heading3>
      </StyledNavLink>
      <Par>{description}</Par>
    </StyledBox>
  );
};

export default class Home extends React.Component {
  renderInfoBlocks() {
    return infoBlocks.map((infoBlock, index) =>
      <InfoBlock {...infoBlock} key={index} />
    );
  }

  render() {
    return (
      <PageWrapper>
        <Helmet>
          <title>Aleksey Nikolsky - Composer, Scientist</title>
        </Helmet>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box width={[12/12, 12/12, 12/12]} padding={2}>
            <ResponsiveImage
              src={HeroImage}
              alt="Aleksey Nikolsky on Steps of Walt Disney Hall"
              heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
            />
          </Box>
          <Box width={[12/12, 12/12, 9/12]} padding={2}>
            <CredoWrapper className="credo">
              <Heading3>Credo</Heading3>
              <CredoPar>In the Beginning there was Musica…</CredoPar>
              <CredoPar>The triumvirate of Musica Universalis, Musica Mundana, and Musica Humana was declared by the first civilizations, and upheld by the descendant cultures as the Order of the World. The music we hear is but a paradigm of global Harmony that holds the universe together - musical tone is a “sounding number” that expresses proportions between things material.</CredoPar>
              <CredoPar>Discovery of organic unity of three harmonies: the celestial spheres, the social relations, and the human mind - all, embodied in a single concept of Musica - marked the rise of the first civilizations. And the oblivion to this unity in the last few centuries does not take it away. Whether or not we are aware of it, our lives are still governed by Music - in the same way it used to be before the dawn of civilization, in prehistoric times.</CredoPar>
              <CredoPar>The harmonious physical properties of music have shaped humanity: music is that bridge which connects the individual minds. Living one’s life in harmony with Musica is a secret that was well known to our distant ancestors who lived in peace and knew no wars - prior to some 16,000 years ago. The existence of this primordial Harmony can be concluded from the archaeological findings of the first musical instruments dated 36,000 years ago, the practice of regulation of daily life with the help of music by those few ethnicities that still retain the hunter/gatherer lifestyle, and from the intuitive discovery of music by infants. Music and Harmony underlie the most peaceful and nurturing communication between a helpless infant and a caring mother - the motherese.</CredoPar>
              <CredoPar>The loss of awareness of this primordial Harmony may have been responsible for the myth of Adam and Eve’s Expulsion from Paradise, bringing about a cascade of never-ending warfare. The more esoteric the art of living in harmony with Musica became, the further away the social and mental disharmony and tension spread out, culminating in two World Wars that shook the world and made the prospect of a Third WW apocalyptic.</CredoPar>
              <CredoPar>Learning to hear Musica and to recognize true music from music-like sound design, is the panacea for so much tribulation that has overwhelmed our lives today.</CredoPar>
              <CredoSignature> - Aleksey Nikolsky, November 9, 2020</CredoSignature>
            </CredoWrapper>
          </Box>
          {this.renderInfoBlocks()}
        </Flex>
      </PageWrapper>
    );
  }
}
