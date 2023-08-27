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
          <StyledPar>Throughout my compositional career I have worked in post-tonal techniques, ranging from serial to aleatoric, as well as in strictly tonal music – limiting myself to the grammar that the composers of Baroque, Classical, and Romantic schools used. I have also composed and performed rock and jazz-rock fusion as well as music in folkloric styles of various European and American nations.</StyledPar>
          <StyledPar>All in all, today, my conviction is that tonal classical music of the “Common Practice Period”, roughly from the 17th – to the early 20th century, by far exceeds other musical styles in its expressive capacity. The richness in tonal classical music’s lexicon of melodic, rhythmic, and harmonic idioms allows for unprecedented density in its expression. There are many more contrasting changes per interval of time, often associated with quite intricate emotional states, in classical music than there are in any other kind of music. In masterful hands, the seemingly “orthodox” means of expression can take completely new shapes, creating an extraordinary spectacle of emotional theater, akin to a “movie” for the internal eye.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture1.jpg')}
            alt="Ancient Greek Masks - Comedy and Tragedy"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>I have been interested in both, the synesthetic expression, as defined by its visionary, Vassily Kandinsky, and in the dramatic development of expressive musical images. I’ve learned a lot from masters of “tone-painting” in programme music - not only in such obvious cases as symphonic poems, sonatas, overtures, but even in such genres as instrumental miniatures or vocal compositions with lyrics. Romantic composers of the 19th-20th centuries introduced many compositional devices designed to represent various objects, qualities, and actions observed in the real physical world by means of synesthetic iconic signification. This includes such things as representation of shapes of physical objects by melodic contours, stability of objects by harmonic progressions, depth of scenery by patterns of music texture, certain actions by rhythm and meter, etc.. The first composer who strove to compose synesthetic music was Scriabin, and the road he discovered leads to the Eldorado of music expressivity - potentially exceeding whatever Scriabin was able to achieve during his short creative life. Too bad, composers who followed his steps all stayed in Russia and ended up either exterminated by the Bolsheviks or forced to switch to the official propaganda music.  </StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture2.jpg')}
            alt="Orchestra Playing to Projection of Kandinsky's Art"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>My other firm conviction is that during the last 2 centuries the “Dionysian art” has nearly completely supplanted the “Apollonian art” – if to follow this famous distinction made by Nietzsche. To begin with, there are much fewer artists attracted to the Apollonian ideals of appreciating beauty, harmony, progress, reason, and individual achievement, whereas there are many more who find inspiration in the Dionysian intoxication of extreme passions, disorder, violent action, ugliness, and collective psychosis. But this is not all! The very origins of Apollonian and Dionysian music diverge as they point in opposite directions. Chromatic harmony that gave rise to dodecaphony and anti-conventional stance of the avant-garde composers is rooted in the sensual <i>chromatic</i> genus of Ancient Greek music, which itself descended from the older enharmonic genus of the dramatic Dyonisiac dithyramb and became related to theater and drinking parties. In contrast, the noble Apollonian paean was closely related to the <i>diatonic</i> genus, cultivated primarily in temple music.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/apollonian-dionysiac.png')}
            alt="Apollonian vs Dionysiac"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>I believe that for music to be sound and healthy, the harmonious Apollonian music has to counterbalance the strident impulses of Dionysian music – just as it used to be in Ancient Greece. Characteristically, in Delphi, the festivals for Apollo and Dionysus followed each other every season. The opposing characteristics of Apollonian and Dionysian music were nevertheless called forth to serve the same purpose of ensuring order and harmony. Annual Dionysian bacchanales provided a controlled outlet for venting out unwanted destructive energy. Musical structures that characterized bacchanal worked as a “valve” for emotional regulation to discharge one's reactive aggression once a year, restricted to a location where the society would not become destabilized. This was to secure a friendly disposition toward the fellow citizens for the rest of the year.</StyledPar>
          <StyledPar>I have come to the conclusion, like many other musicians, that Schoenberg, Webern, Stravinsky, Cage, and Varèse made a grave mistake in discarding the heritage of tonality, and in leaning toward the radical “innovationist” means of expression. They made it very clear in their writings that they wanted to discard or radically revise the conventional expressive means. The next generation of avant-garde composers, such as Boulez, Stockhausen, Xenakis, and Nono adopted even a more radical stance in complete rejection of any traditional musical idioms, whether of pitch, rhythm, or music texture, no matter whether the idioms came from folk, popular, Western classical, or a non-Western classical music.</StyledPar>
          <StyledPar>Unfortunately, generations that followed these avant-garde leaders were torn away from the old tradition, and lost the nurturing ground which made music appealing and expressive. New compositions started to sound more and more abstract, devoid of content and tangible musical ideas. As the aesthetics of the avant-garde became the norm in the cultural establishment, music lost much of its content and contrast. This matter became obvious to the talented expressive composers of the second half of the 20th century who spoke out against the stifling influence of the avant-garde techniques: Lutoslawski, Henze, Penderecki, Ligeti, Nono, Denisov, Schnittke, Maderna – yet none of them could break away from the monotony of the game they chose to play, regardless of what techniques each invented to break this spell.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture4.jpg')}
            alt="Cartoon - Dog frantically running with lots of household objects tied to its tail."
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>Minimalism made matters even worse. As in the joke about a psychologist who turned diseases into “pleasurable experiences,” the minimalist aesthetics plays on turning monotony into a game that uses traditional idioms. The problem here is that minimalism is very Stravinskian in that it mimics tradition rather than following its generative grammar.</StyledPar>
          <StyledPar>Like Stravinsky, who was fond of taking Lully or Pergolesi and jumbling their styles with “false” notes, composers like Glass or Riley toy with the idioms of popular music without really “saying” anything. Their attempts to incorporate the sound of what is popular today remain abstract in essence. They just mumble words of music that sound familiar without putting any meaning into them – perhaps to keep them “post-modernistically” stylish.</StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture5.jpg')}
            alt="Postmodernistic music group with deconstructed face costumes."
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
            }}
          />
          <StyledPar>Lessons learned from popular music of today as well as popular music of the past and the “ever-green” classical repertoire, have convinced me that the road to newly expressive music, one which would be valuable for the modern day masses, lies in the domain of conventional musical idioms and conventional rules of expression.</StyledPar>
          <StyledPar>Tonality and meter are such staples of expression that omitting them, as the modernists did, or faking them, as the postmodernists do, robs music of much of its potential power to impart any meaning. Without a theme of a certain character and thematic development, music comes close to aimless blabbing. The expressive contribution of meter is often overlooked, but from the times of Plato to Shostakovich, compositional music theory has regarded specific meters as suitable or unsuitable for specific expressions. I highly recommend the book “The Lost Tradition in Music: Rhythm and Tempo in J.S. Bach’s Time” by Fritz Rothchild and “Meter in Music, 1600-1800: Performance, Perception, and Notation” by George Houle.</StyledPar>
          <StyledPar>It is silly to avoid using traditional idioms just because of some groundless fear of lacking originality and fascination with innovation. Verbal language is quite similar to “music language” in the way it constructs longer expressions from smaller ones and distributes idiomatic expressions amongst the community of users. But it never abandoned its grammatical foundation! Today, no creative writer in his right mind would strive to invent completely new rules words, while abstaining from already existing meaningful words. In the past, there were such experiments but they failed badly. </StyledPar>
          <img
            src={require('../../images/stylistic-statement/Picture6.jpg')}
            alt="Page of dadaistic poem"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_CENTER,
              maxWidth: 300,
            }}
          />
          <StyledPar>I personally prefer the musical lexicon of the early 20th century, which builds on the melodic, rhythmic, and harmonic idioms introduced by Scriabin, Debussy, Satie, early Schoenberg, Prokofiev, Shostakovich, and Bartók. Their creativity still abided by the older syntactic norms, while generating new patterns of expression: their audiences still heard sufficient conventional material that provided a context for them to extract meaning from their innovative additions.</StyledPar>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default StylisticStatement;
