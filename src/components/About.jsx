/** @jsx jsx */

import {jsx} from '@emotion/core';
import styled from '@emotion/styled/macro';
import PropTypes from 'prop-types';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Box, Flex} from 'rebass';
import aleksey17 from '../images/about/aleksey-17.jpg';
import alekseyHeadshot from '../images/about/aleksey-headshot.jpg';
import alekseyInStudy from '../images/about/aleksey-in-study.jpg';
import alekseyLittle from '../images/about/aleksey-little.jpg';
import kidsAfterMIS from '../images/about/kids-after-mozart-in-shape.jpg';
import korndorfAndLedenyov from '../images/about/korndorf-and-ledenyov.jpg';
import moscowConservatory from '../images/about/moscow-conservatory.jpg';
import schnittkeAndDenisov from '../images/about/schnittke-and-denisov.jpg';
import {BODY_TEXT_STYLE, IMG_STYLES, MEDIA_QUERIES} from '../styles';
import {Heading4, Heading5, Par} from './common';

const propTypes = {
  pathname: PropTypes.string,
};

const ImgHeadshot = styled.img({
  width: '100%',
});

const AnchorLinkedIn = styled.a({
  ...BODY_TEXT_STYLE,
  textAlign: 'center',
  color: '#3498db',
  display: 'block',
  fontSize: '1rem',
  marginTop: '0.5rem',
  [MEDIA_QUERIES.hover]: {
    '&:hover': {
      color: '#3498db',
      textDecoration: 'underline',
    }
  },
});

const SummarySectionHeader = styled(Heading5)({
  fontSize: "1rem",
  marginBottom: "0.5rem",
  backgroundColor: "#EDEDED",
  padding: "2px2px2px8px",
  '&:first-of-type': {
    marginTop: 0,
  },
});

const SummarySectionTitle = styled(Par)({
  fontWeight: "bold",
  marginLeft: "9px",
  marginTop: "1rem",
  fontSize: "0.8rem",
  '&:first-of-type': {
    marginTop: "0rem",
  },
});

const SummarySectionDetail = styled(Par)({
  fontSize: "0.8rem",
  fontStyle: "italic",
  lineHeight: "1rem",
  marginLeft: "9px",
  '&:last-of-type': {
    marginBottom: '1rem',
  }
});

const BioPar = styled(Par)({
  marginBottom: '1rem',
});

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Aleksey Nikolsky - About</title>
      </Helmet>
      <Flex flexWrap="wrap">
        <Box width={[12/12, 12/12, 4/12]} padding={2}>
          <Flex flexWrap="wrap">
            <Box width={[12/12, 6/12, 12/12]} padding={1}>
              <ImgHeadshot src={alekseyHeadshot} alt="Aleksey Profile" />
              <AnchorLinkedIn
                href="http://linkedin.com/in/alekseynikolsky"
                target="_blank"
                rel='noreferrer noopener'
              >LinkedIn Profile</AnchorLinkedIn>
            </Box>
            <Box width={[12/12, 6/12, 12/12]} padding={1}>
              <div>
                <SummarySectionHeader>Education</SummarySectionHeader>
                <SummarySectionTitle>Doctorate in Composition &amp; Music Theory</SummarySectionTitle>
                <SummarySectionDetail>Moscow State Tchaikovsky Conservatory, 1989</SummarySectionDetail>
                <SummarySectionDetail>Honors: Maxima Cum Laude (4.0 GPA)</SummarySectionDetail>

                <SummarySectionTitle>Masters in Music Theory</SummarySectionTitle>
                <SummarySectionDetail>Moscow Schnittke Institute of Music, 1982</SummarySectionDetail>
                <SummarySectionDetail>Honors: Maxima Cum Laude (4.0 GPA)</SummarySectionDetail>
              </div>

              <div>
                <SummarySectionHeader>Awards</SummarySectionHeader>
                <SummarySectionTitle>Khachaturian Composition Award</SummarySectionTitle>
                <SummarySectionDetail>4 Time Winner: 1986, 87, 88, 89</SummarySectionDetail>

                <SummarySectionTitle>USSR Ministry of Culture Award</SummarySectionTitle>
                <SummarySectionDetail>1985, Moscow, Russia</SummarySectionDetail>
              </div>

              <div>
                <SummarySectionHeader>Specialties</SummarySectionHeader>
                <SummarySectionDetail>Music Composition, Music Education, Music Theory, Musical Analysis, Pedagogic Theory, Semiotics of Music, Ethnomusicology, Systematic Musicology, Audio Engineering, Music Psychology</SummarySectionDetail>
              </div>
            </Box>
          </Flex>
        </Box>
        <Box width={[12/12, 12/12, 8/12]} padding={2}>
          <BioPar>My life has been a unique combination of deep study of music and many other disciplines, as well as the creation of various educational music programs.</BioPar>

          <Heading4>My Early Music Education</Heading4>
          <BioPar>Born in 1964, I began my music education at the age of 6 by playing the accordion, and improvised my first compositions at the age of 7.</BioPar>
          <img
            src={alekseyLittle}
            alt="Aleksey Singing as a Child"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>At 11 I switched to piano and learned to score for piano and ensembles of 2-3 instruments. By the time I was 14, I had already earned degrees in Accordion Performance, Piano Performance, and Choral Singing from the Igumnov Music School and the Shchedrin Music School in Moscow, graduating with honors from both. During this time I also took lessons in composition from the renowned Soviet songwriter, Pavel Ayedonitsky, and from Igor Yakushenko, the head of the jazz department at the Composer’s Union of the USSR – the person who was instrumental in helping me discover how popular idioms could be effectively used in writing “serious music.”</BioPar>
          <img
            src={aleksey17}
            alt="Aleksey at Age 17"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>At 18, I graduated from the Moscow Schnittke Institute of Music, majoring in Music Theory – with honors. This certified me to teach in primary school, which I did following the Kabalevsky Method.</BioPar>

          <Heading4>My Contact with Two Giants: Schnittke and Denisov</Heading4>
          <BioPar>Meeting Alfred Schnittke in 1978 changed my life. Schnittke was quite amused by the similarities between the two of us. We both studied in the same school of music, and our first instrument was the accordion! Like Schnittke, I too ventured into composing modernistic music. It was Schnittke who encouraged me to pursue a career in composition despite my teachers’ insistence that I focus on music theory and capitalize on my strength in analysis of music form.</BioPar>
          <img
            src={schnittkeAndDenisov}
            alt="Schnittke (Reginald Grey) and Denisov"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <BioPar style={{clear: 'both'}}>In search of a mentor capable of guiding me towards my goal as a professional composer, I was fortunate to find Edison Denisov. From 1979 until his tragic death in Paris (1996), we maintained a close relationship. For political reasons, he was forbidden to teach composition in the USSR, so he continued to give me private lessons at his home, and suggested that I enter the Moscow State Tchaikovsky Conservatory to sign up for Roman Ledenev’s class.</BioPar>
          <BioPar>But first I had to complete my mandatory 2-year military service during which I worked as Artistic Director of the Music & Arts Club for my military unit. Responsible for organizing live entertainment and arrangement of popular music, I also played the keyboard in a rock band. In 1982, my band won a contest for best music ensemble in the Moscow military district. I also achieved some success in Urban Poetry by writing politically charged satirical poems in surrealistic style and lyrics that were used by popular rock musicians such as Vladimir Volenko.</BioPar>
          <img
            src={moscowConservatory}
            alt="Moscow Conservatory"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>At the Conservatory, I got involved with the Cabinet of Folk Music and the Acoustics Lab. I participated in an expedition to southern Moldova to research the music tradition of old Orthodox Christian settlers in Izmail. In 1988-89, I studied music of the Far East and the Middle East, at the World Music Center in Moscow, becoming very close with its founder, Givani Mikhailov. There, I obtained a wealth of information about the world’s music from its fantastic LP collection.</BioPar>

          <Heading4>Starting a New Life in Mexico and the US</Heading4>
          <BioPar>In 1990 I accepted an offer as Composer-In-Residence of the newly founded Orquesta de Baja California in Ensenada (which later  relocated to Tijuana). While in Mexico, I worked out an innovative method of ear training that I tested on local children with successful results. In 1993, I became interested in systematic musicology, a new field that back then was available only at UCLA - in the US, and at Berlin University - in Germany. That is why I decided to move to Los Angeles. In 1995, UCLA granted me attendance to their Ph.D. courses through their extension program. While at UCLA, I discovered the emerging science of biomusicology.</BioPar>
          <BioPar>This prompted me to put a hold on composition. By now I was fully convinced that music was in a crisis. So, although at that time I had the opportunity to join Denisov in Paris where he was participating in the Artists Projects at IRCAM, I refused to do so - making it the second time to have turned down an offer to join IRCAM (in 1987 I was invited by Jean-Claude Risset, one of IRCAM’s founders, to join after my graduation). Instead, I decided to dedicate myself entirely to developing a method of teaching music as a language system.</BioPar>
          <BioPar>I started developing mixed feelings about the avant-garde music circa 1988. That is why when in 1990 Denisov and Korndorf invited me to join the New Association for Contemporary Music of Russia that they founded in 1990, I did not follow up on the invitations as I felt that the members of this association were too obsessed with inventing new grammars of music and too little interest in matters of expression in reaching the audience.</BioPar>
          <BioPar>And now, discussions with my one-time teacher, now friend, Nikolai Korndorf, who had changed his earlier and now strived to forge new ways of connecting with wide audiences, only strengthened my conviction that the music industry has deviated from what is a biologically “normal” course for music to proceed. It is necessary to help entrepreneurs challenge the cultural management policies of the music industry. Musicians have to see that in a given market niche it is possible to enjoy financial success in satisfying the needs of listeners who long for expressive music. Those musicians who wish to create expressive music should unite their efforts to circumvent the industry’s grip over the market.</BioPar>
          <img
            src={korndorfAndLedenyov}
            alt="My teachers and friends, Nikolai Korndorf and Roman Ledenyov"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_PORTRAIT,
            }}
          />
          <BioPar>Drawing on my research in the methodology of music teaching, ear-training, and interpretation of music compositions, as well as  my experience with the Kabalevsky system in the USSR, and the Yamaha and Orff’ methods in the USA, I formulated the Synergo Music Method – with programs ranging from preschool age to advanced piano performance. After having composed hundreds of pieces for the Synergo Piano Method (1995-2005), I now felt more free and inspired to write in a more melodic and tonal style of music, breaking away from atonal and post-tonal compositional techniques.</BioPar>

          <Heading4>Toward A New Music Horizon</Heading4>
          <BioPar>My extensive 12-year study of psychoacoustics, neurophysiology, sociology of music, children's epistemology, history of music education, and performance practices led to the establishment of a private business in Los Angeles. The result of my work was the creation of three big programs of general music education: Kids-Go-Classical, Mozart-In-Shape, and Rhythmetrics.</BioPar>
          <img
            src={kidsAfterMIS}
            alt="Kids after a Mozart In Shape session"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>As part of my ongoing work on methodology of music, I tested how children of various ages recognize musical emotions and the contributing music structures in the music they hear and how they actually perceive the synesthetic correspondences between music, motion, imagery, and touch. My findings, together with my multidisciplinary approach to studying music, led me to forge a broad theory of evolution of tonality, which I expanded into a new and innovative theory of evolution of music as a language. And in 2014, I began to write papers on my research topics. </BioPar>
          <img
            src={alekseyInStudy}
            alt="Aleksey in the study"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>Currently, I am working toward completing 3 books: one, on the subject of semiotics that will describe the organization of music as a semiotic system designed to convey emotions; another, on the evolution of tonal organization in music; and a third, on the interplay of music and politics during the 20th century, and its impact on the music industry.</BioPar>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

About.propTypes = propTypes;

export default About;
