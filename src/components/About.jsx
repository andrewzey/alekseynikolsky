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
import {GA_ACTION, GA_CATEGORY, sendEvent} from '../analytics';
import {BODY_TEXT_STYLE, IMG_STYLES, MEDIA_QUERIES} from '../styles';
import {Heading4, Heading5, Par} from './common';

const propTypes = {
  pathname: PropTypes.string,
};

function logLinkedInClick(url) {
  sendEvent({
    category: GA_CATEGORY.EXTERNAL_LINK,
    action: GA_ACTION.CLICK,
    label: url,
  });
}

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
                onClick={() => logLinkedInClick('http://linkedin.com/in/alekseynikolsky')}
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
          <BioPar>My life has been a unique combination of deep study of music and many other disciplines, as well as creation of various educational music programs.</BioPar>

          <Heading4>My Early Music Education</Heading4>
          <BioPar>I began my music education at the age of 6 by playing the accordion, and improvised my first compositions at the age of 7.</BioPar>
          <img
            src={alekseyLittle}
            alt="Aleksey Singing as a Child"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>At 11 I switched instruments to piano and learned to score for piano and ensembles of 2-3 instruments. By the time I was 14, I had already earned degrees in Accordion Performance, Piano Performance, and Choral Singing from the Igumnov Music School and the Shchedrin Music School, graduating with honors from both. During this time I also took lessons in composition from the renowned Soviet songwriter, Pavel Ayedonitsky, and from Igor Yakushenko, the head of the jazz department at the Composer’s Union of the USSR – the person who was instrumental in helping me discover how popular idioms could be effectively used in writing “serious music.”</BioPar>
          <img
            src={aleksey17}
            alt="Aleksey at Age 17"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>At 18, I graduated the Moscow Schnittke Institute of Music, majoring in Music Theory – with honors. This certified me to teach in primary school, which I did following the Kabalevsky Method.</BioPar>

          <Heading4>My Contact with Two Giants: Schnittke and Denisov</Heading4>
          <BioPar>Meeting Alfred Schnittke in 1978 changed my life. Schnittke was quite taken by the similarities between the two of us. We both studied in the same school of music, and our first instrument was the accordion! Like Schnittke, I too ventured into composing modernistic music. It was Schnittke who encouraged me to pursue a career in composition despite my teachers’ insistence that I focus on music theory and capitalize on my strength in analysis of music form.</BioPar>
          <img
            src={schnittkeAndDenisov}
            alt="Schnittke (Reginald Grey) and Denisov"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <BioPar style={{clear: 'both'}}>In search of a mentor capable of guiding me towards my goal as a professional composer, I was fortunate to find Edison Denisov. From 1979 until Denisov's tragic death in Paris (1996), we maintained a close relationship. For political reasons Denisov was forbidden to teach composition in the USSR, so he continued to give me private lessons at his home, and suggested that I entered the Moscow State Tchaikovsky Conservatory to sign up in Roman Ledenev’s class.</BioPar>
          <BioPar>But at first I had to complete my mandatory 2-year military service where I worked as the Artistic Director of the Music & Arts Club for my military unit. Responsible for organizing live entertainment and arrangement of popular music, I also played the keyboard in a rock band. In 1982, I won the contest for best music ensemble in the Moscow military district. I also achieved some success in Urban Poetry with my lyrics that were used by popular rock musicians such as Vladimir Volenko.</BioPar>
          <img
            src={moscowConservatory}
            alt="Moscow Conservatory"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>At the Conservatory, I got involved with the Cabinet of Folk Music and the Acoustic Lab. I participated in an expedition to southern Moldova to research the music tradition of old Orthodox Christian settlers in Izmail. In 1988-89, I studied music of the Far East and the Middle East, at the World Music Center, becoming very close with its founder, Givani Mikhailov. There, I learned a wealth of information about the world’s music from its fantastic LP collection.</BioPar>

          <Heading4>Starting a New Life in Mexico and the US</Heading4>
          <BioPar>In 1990 I accepted an offer as Composer-In-Residence of the newly founded Orquesta de Baja California. While in Mexico, I worked out an innovative method of ear training that I tested on local children with successful results. In 1993, I became interested in the unique program of systematic musicology, which back then was available only at UCLA or Berlin University, which caused me to come to Los Angeles. Access to the UCLA library's newest materials led me to discover the emerging science of biomusicology.</BioPar>
          <BioPar>This prompted me to put a hold on composition. By now I was fully convinced that music was in a crisis. So, although by that time I had the occasion to join Denisov in Paris when he was participating in the Artists Projects at IRCAM, but having formed strong concerns about the direction that music had taken, I abandoned this opportunity. Instead I devoted myself entirely to building a method of teaching music as a language system, capitalizing on the innate human abilities to comprehend music. Discussions with my once teacher, now friend, Nikolai Korndorf, who strived to forge new ways of connecting to the wide audiences, only strengthened my conviction that music industry has deviated from biologically “normal” course and needs some energetic measures to restore the communicative function of music in modern industrial society. </BioPar>
          <img
            src={korndorfAndLedenyov}
            alt="My teachers and friends, Nikolai Korndorf and Roman Ledenyov"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_PORTRAIT,
            }}
          />
          <BioPar>Drawing from my research in the history of methodology of music and my experience with Kabalevsky system in the USSR, and the Yamaha and Orff’s methods in the USA, I formulated the Synergo Music Method – with programs starting from pre-school age to advanced piano performance.</BioPar>
          <BioPar>After having composed hundreds of pieces for the Synergo Piano Method (1995-2005), I now felt freer and inspired to write in a more melodic and tonal-base style music, breaking away from modernistic idioms.</BioPar>

          <Heading4>Toward A New Music Horizon</Heading4>
          <BioPar>My extensive 12-year study of psychoacoustics, neurophysiology, sociology of music, children's epistemology, history of music education, and performance practices – all led to the establishment of a private business in Los Angeles. The result of my work was creation of three big programs of general education, all based on music: Kids-Go-Classical, Mozart-In-Shape, and Rhythmetrics.</BioPar>
          <img
            src={kidsAfterMIS}
            alt="Kids after a Mozart In Shape session"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>Throughout my ongoing work in methodology, together with my wife Sheila, we conducted numerous experiments on musical emotion and cross-modal perception of music by children. My findings, together with the multi-disciplinary research, led me to forge a quite broad theory of evolution of tonality, which I expanded in a new and innovative theory of evolution of music language. And starting from 2014, I began to put out papers on my research topics. </BioPar>
          <img
            src={alekseyInStudy}
            alt="Aleksey in the study"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <BioPar>Currently, I am working toward completing 3 books: one, on the subject of semiotics that would describe the organization of music as a semiotic system designed to convey emotions; the second, on the evolution of tonal organization in music; and the third, on the interplay of music and politics during the 20th century, and its impact on the music industry.</BioPar>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

About.propTypes = propTypes;

export default About;
