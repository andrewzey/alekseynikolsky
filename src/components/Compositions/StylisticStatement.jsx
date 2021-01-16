/** @jsx jsx */

import {jsx} from '@emotion/core';
import styled from '@emotion/styled/macro';
import {Helmet} from 'react-helmet';
import {Box, Flex} from 'rebass';
import {IMG_STYLES} from '../../styles';
import {Heading3, Par} from '../common';

const Wrapper = styled.div({});

const StyledPar = styled(Par)({
  marginBottom: '1rem',
});

const StylisticStatement = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Aleksey Nikolsky - Compositions - Stylistic Statement</title>
      </Helmet>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box width={[12 / 12, 12 / 12, 12 / 12]} padding={2}>
          <Heading3>Stylistic Statement</Heading3>
          <StyledPar>Throughout my compositional career I have worked in every post-tonal technique – ranging from serial to aleatoric, as well as strictly tonal music – limiting myself to the same grammar the composers of Baroque, Classical, and Romantic schools observed. I have also composed and performed rock and jazz-rock fusion as well as music in folkloric styles of various European and American nations.</StyledPar>
          <StyledPar>All in all, my conviction is that tonal classical music of the so called “common practice period”, roughly 17th – early 20th century, by far exceeds other musical styles in its expressive capacity. The richness in tonal classical music’s lexicon of melodic, rhythmic, and harmonic idioms allows for unprecedented density in its expression.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture1.jpg')}
            alt="Ancient Greek Masks - Comedy and Tragedy"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>There are many more contrasting changes per interval of time, often with very intricate emotional states, expressed in classical music than there are in any other kind of music. In masterful hands, the seemingly “orthodox” means of expression can take completely new shapes, creating an extraordinary spectacle of emotional theater, akin to a “movie”, for the internal eye.</StyledPar>
          <StyledPar>I am strongly convinced of the idea of synesthetic expression, as defined by its visionary, Vassily Kandinsky – and see a gradual increase in contribution of other sensory modalities to music: the late 19th century compositions sound in terms of histrionic movement, visualization of images and palpation of materials.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture2.jpg')}
            alt="Orchestra Playing to Projection of Kandinsky's Art"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>I also believe in the principles of Apollonian art and ideas of harmony of the spheres that guided Western European cultures from the times of Pythagoras when he coined these ideas, up until the early 20th century – that include attempts of early modernistic composers, such as Anton Webern, to revive them through their music.</StyledPar>
          <StyledPar>However, I have come to the conclusion that Schoenberg, Berg, Webern, Stravinsky, Cage, and Varèse made a grave mistake in discarding the heritage of tonality, and in moving toward the radical “innovation” of expressive means.</StyledPar>
          <StyledPar>Unfortunately, generations that followed these masters became torn away from the old tradition, and lost that nurturing ground which made music appealing and expressive. The followers of Schoenberg, Stravinsky, and Ives began sounding more and more abstract, devoid of content and tangible musical ideas. As the aesthetics of avant-garde became the norm in the cultural establishment, music irretrievably lost its content and contrast. This matter became obvious to all talented expressive composers of the 2nd half of the 20th century: Lutoslawski, Henze, Penderecki, Ligeti, Nono, Denisov, Schnittke, Maderna – yet none of them could break away from the monotony of the game they chose to follow, regardless of what techniques they invented to break this spell.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture4.jpg')}
            alt="Cartoon - Dog frantically running with lots of household objects tied to its tail."
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>Minimalism made matters even worse. As in the joke about a psychologist who turned diseases into “pleasurable experiences,” minimalist aesthetics plays on turning monotony into a game that uses traditional idioms. The problem here is that minimalism is very Stravinskian in mimicry of the tradition rather than following its generative grammar.</StyledPar>
          <StyledPar>Like Stravinsky, who was fond of taking Lully or Pergolesi and jumbling their styles with “false” notes, composers like Glass or Riley toy with the idioms of popular music without really “saying” anything. Their attempts to incorporate the sound of what is popular today remain abstract in essence. They just mumble words of music that sound familiar without putting any meaning into them – perhaps to keep them “post-modernistically” stylish.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture5.jpg')}
            alt="Postmodernistic music group with deconstructed face costumes."
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>Lessons learned from popular music of today as well as popular music of the past and the “ever-green” classical repertoire, have convinced me that the road to serious conceptual music, one which would be valuable for the modern day masses, lies in the domain of conventional musical idioms and their rules of expression.</StyledPar>
          <StyledPar>Tonality and meter are such staples of expression that dropping them as modernists did, or faking them, as postmodernists do, steals music of much of its potential power to impart any meaning to the listener. Without a theme of a certain character and thematic development, music is short of aimless blabbing. It is silly to avoid using traditional idioms just because of prejudice and just so to sound novel and innovative. The best model to follow here would be of verbal language, which is remarkably similar to music language. No creative writer in his right mind would strive to invent completely new words, while abstaining from known words that are meaningful.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture6.jpg')}
            alt="Page of dadaistic poem"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
              maxWidth: 300,
            }}
          />
          <StyledPar>I personally prefer the lexicon of the early 20th century, with additions of the melodic, rhythmic, and harmonic idioms introduced by Scriabin, Debussy, Satie, early Schoenberg, Prokofiev, Shostakovich, and Bartok. Their creativity still abode by the older syntactic norms, while generating new patterns of expression: their audiences still heard sufficient conventional material providing a context to figure out the meaning of their innovations.</StyledPar>
          <StyledPar>The entire glossary of expressions from Renaissance to the early 20th century should serve as a comprehensive pool of musical ideas for any music work to be created – in a way similar to how English words from Old English can spark the modern day creative writing. At this historic moment, more than anything else, we need to restore a linguistic-like approach to music that was exercised by the Baroque composers, and develop a new system of musical rhetoric, capable of convincing the modern day listener in the realism of the musical emotions conveyed by the language of music. </StyledPar>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default StylisticStatement;
