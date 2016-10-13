import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import './About.css';

import AlekseyProfile from '../../images/about/aleksey-profile.jpg';

const baseClass = 'About';

const propTypes = {
  pathname: PropTypes.string,
};

const About = ({ pathname }) => {
  const SummarySectionHeader = ({ children }) => {
    return (
      <h5 className={`${baseClass}__summary__header`}>{children}</h5>
    );
  };

  const SummarySectionTitle = ({ children }) => {
    return (
      <p className={`${baseClass}__summary__title`}>{children}</p>
    );
  };

  const SummarySectionDetail = ({ children }) => {
    return (
      <p className={`${baseClass}__summary__detail`}>{children}</p>
    );
  };

  return (
    <div className={baseClass}>
      <DocumentTitle title='Aleksey Nikolsky - About' />
      <Flex wrap>
        <Box col={12} sm={12} md={4} p={2}>
          <div className={`${baseClass}__summary`}>
            <Flex wrap>
              <Box col={12} sm={6} md={12} p={1}>
                <img src={AlekseyProfile} alt="Aleksey Profile" />
                <a className={`${baseClass}__summary__linkedin`} href="linkedin.com/in/alekseynikolsky" target="_blank">LinkedIn Profile</a>
              </Box>
              <Box col={12} sm={6} md={12} p={1}>
                <div>
                  <SummarySectionHeader>Education</SummarySectionHeader>
                  <SummarySectionTitle>Ph.D. Composition &amp; Music Theory</SummarySectionTitle>
                  <SummarySectionDetail>Moscow State Tchaikovsky Conservatory, 1989</SummarySectionDetail>
                  <SummarySectionDetail>Honors: Maxima Cum Laude (4.0 GPA)</SummarySectionDetail>

                  <SummarySectionTitle>Masters in Pedagogy, Music Theory, Piano</SummarySectionTitle>
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
                  <SummarySectionDetail>Advanced Piano, Music Composition, Orchestration &amp; Instrumentation, Sequencing &amp; Audio Mastering</SummarySectionDetail>
                </div>
              </Box>
            </Flex>
          </div>
        </Box>
        <Box col={12} sm={12} md={8} p={2}>
        <div className={`${baseClass}__bio`}>
          <p>My life has been a unique combination of deep study of music and many other disciplines, as well as creation of various educational music programs.</p>

          <h4>My Early Music Education</h4>
          <p>I began my music education at the age of 6 by playing the accordion, and improvised my first compositions at the age of 7.</p>

          {/*1) PHOTO: Aleksey Singing as a Child
          http://www.mozartinshape.org/images/photos/bios/aleksey_little.jpg*/}
          <p>At 11 I switched instruments to piano and learned to score for piano and ensembles of 2-3 instruments. By the time I was 14, I had already earned degrees in Accordion Performance, Piano Performance, and Choral Singing from the Igumnov Music School and the Shchedrin Music School, graduating with honors from both. During this time I also took lessons in composition from the renowned Soviet songwriter, Pavel Ayedonitsky, and from Igor Yakushenko, the head of the jazz department at the Composer’s Union of the USSR – the person who was instrumental in helping me discover how popular idioms could be effectively used in writing “serious music.”</p>

          {/*2) PHOTO: Aleksey, Age 17
          http://www.mozartinshape.org/images/photos/bios/aleksey17.jpg*/}

          <p>At 18, I graduated the Moscow Schnittke Institute of Music, majoring in Music Theory – with honors. This certified me to teach in primary school, which I did following the Kabalevsky Method.</p>

          <h4>My Contact with Two Giants: Schnittke and Denisov</h4>
          <p>Meeting Alfred Schnittke in 1978 changed my life. Schnittke was quite taken by the similarities between the two of us. We both studied in the same school of music, and our first instrument was the accordion! Like Schnittke, I too ventured into composing modernistic music. It was Schnittke who encouraged me to pursue a career in composition despite my teachers’ insistence that I focus on music theory and capitalize on my strength in analysis of music form.</p>

          {/*
          3) Alfred Schnittke         4) Edison Denisov*/}
          <p>In search of a mentor capable of guiding me towards my goal as a professional composer, I was fortunate to find Edison Denisov. From 1979 until Denisov's tragic death in Paris (1996), we maintained a close relationship. For political reasons Denisov was forbidden to teach composition in the USSR, so he continued to give me private lessons at his home, and suggested that I entered the Moscow State Tchaikovsky Conservatory to sign up in Roman Ledenev’s class.</p>

          <p>But at first I had to complete my mandatory 2-year military service where I worked as the Artistic Director of the Music & Arts Club for my military unit. Responsible for organizing live entertainment and arrangement of popular music, I also played the keyboard in a rock band. In 1982, I won the contest for best music ensemble in the Moscow military district. I also achieved some success in Urban Poetry with my lyrics that were used by popular rock musicians such as Vladimir Volenko.</p>

          <p>At the Conservatory, I got involved with the Cabinet of Folk Music and the Acoustic Lab. I participated in an expedition to southern Moldova to research the music tradition of old Orthodox Christian settlers in Izmail. In 1988-89, I studied music of the Far East and the Middle East, at the World Music Center, becoming very close with its founder, Givani Mikhailov. There, I learned a wealth of information about the world’s music from its fantastic LP collection.</p>

          {/*5) conservatory picture*/}

          <h4>Starting a New Life in Mexico and the US</h4>

          <p>In 1990 I accepted an offer as Composer-In-Residence of the newly founded Orquesta de Baja California. While in Mexico, I worked out an innovative method of ear training that I tested on local children with successful results. In 1993, I became interested in the unique program of systematic musicology, which back then was available only at UCLA or Berlin University, which caused me to come to Los Angeles. Access to the UCLA library's newest materials led me to discover the emerging science of biomusicology. </p>

          <p>This prompted me to put a hold on composition. By now I was fully convinced that music was in a crisis. So, although by that time I had the occasion to join Denisov in Paris when he was participating in the Artists Projects at IRCAM, but having formed strong concerns about the direction that music had taken, I abandoned this opportunity. Instead I devoted myself entirely to building a method of teaching music as a language system, capitalizing on the innate human abilities to comprehend music. Discussions with my once teacher, now friend, Nikolai Korndorf, who strived to forge new ways of connecting to the wide audiences, only strengthened my conviction that music industry has deviated from biologically “normal” course and needs some energetic measures to restore the communicative function of music in modern industrial society. </p>

          {/*6) My teachers and friends, Nikolai Korndorf and Roman Ledenyov*/}

          <p>Drawing from my research in the history of methodology of music and my experience with Kabalevsky system in the USSR, and the Yamaha and Orff’s methods in the USA, I formulated the Synergo Music Method – with programs starting from pre-school age to advanced piano performance.</p>
          <p>After having composed hundreds of pieces for the Synergo Piano Method (1995-2005), I now felt freer and inspired to write in a more melodic and tonal-base style music, breaking away from modernistic idioms. </p>

          <h4>Toward A New Music Horizon</h4>

          <p>My extensive 12-year study of psychoacoustics, neurophysiology, sociology of music, children's epistemology, history of music education, and performance practices – all led to the establishment of a private business in Los Angeles. The result of my work was creation of three big programs of general education, all based on music: Kids-Go-Classical, Mozart-In-Shape, and Rhythmetrics. </p>

          {/*7) PHOTO: Kids after a Mozart-in-Shape session
          http://www.mozartinshape.org/images/photos/misgroup1.png*/}

          <p>Throughout my ongoing work in methodology, together with my wife Sheila, we conducted numerous experiments on musical emotion and cross-modal perception of music by children. My findings, together with the multi-disciplinary research, led me to forge a quite broad theory of evolution of tonality, which I expanded in a new and innovative theory of evolution of music language. And starting from 2014, I began to put out papers on my research topics. </p>

          {/*8) PHOTO: Aleksey in the study
          http://www.mozartinshape.org/images/photos/bios/alekseyinstudy.jpg*/}

          <p>Currently, I am working toward completing 3 books: one, on the subject of semiotics that would describe the organization of music as a semiotic system designed to convey emotions; the second, on the evolution of tonal organization in music; and the third, on the interplay of music and politics during the 20th century, and its impact on the music industry.</p>
          </div>
        </Box>
      </Flex>
    </div>
  );
};

About.propTypes = propTypes;

export default About;
