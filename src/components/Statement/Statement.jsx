import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';
import classNames from 'classnames';

import './Statement.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_HERO } from '../../constants';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import HeroOverlay from '../HeroOverlay/HeroOverlay';
import HeroImage from '../../images/statement/statement-hero-school-of-athens.jpg'

import image1 from '../../images/statement/image1.png';
import image2 from '../../images/statement/image2.png';
import image3 from '../../images/statement/image3.png';
import image4 from '../../images/statement/image4.jpeg';
import image5 from '../../images/statement/image5.jpeg';
import image6 from '../../images/statement/image6.png';
import image7 from '../../images/statement/image7.png';

const baseClass = 'Statement';

const propTypes = {
  pathname: PropTypes.string,
};

const Statement = ({ pathname }) => {
  return (
    <div className={baseClass}>
      <DocumentTitle title='Aleksey Nikolsky - Statement of Purpose' />
      <Flex wrap justify="center">
        <Box col={12} sm={12} p={2} style={{position: 'relative'}}>
          <ResponsiveImage
            src={HeroImage}
            alt="Library filled with Books"
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
          />
          <HeroOverlay type="statement">
            <h3>Statement of Purpose</h3>
            <p>It took me years to finally resolve a disconcerting contradiction which I experienced as an artist / musicologist, and as a consumer of music. I needed to understand what had caused the very clear faceted role of music that was functioning undisturbed for centuries in Western societies, to so quickly deteriorate with accelerating pace, especially in the past few decades. I could therefore see no point in living the life of a professional composer under such circumstances. In search of an answer, I temporarily put a halt on writing music until I would figure out what kind of music today’s culture needed.</p>
            <p>I quickly immersed myself into extensive studies of various fields of science, semiotics, biology, music history, comparative ethnomusicology, developmental epistemology, anthropology, and methodology of music, while trying to formulate an effective method of teaching music as a language. After finally having come to grasp with the quintessence of what contributed to the demise of classical music, it is only now that see a coherent picture of what constitutes a “normal” state of musical communication, which I would like to share with you.</p>
          </HeroOverlay>
        </Box>
        <Box col={12} sm={12} p={2}>
          <img
            src={image1}
            alt=""
            className={classNames(
              `${baseClass}__img`,
              `${baseClass}__img--right`,
              `${baseClass}__img--portrait`,
            )}
          />
          <p>I believe that music is a peculiar form of a semiotic system that has evolved to satisfy people’s need to mediate and negotiate such mental states that are optimal for a given behavior – especially the ones that are considered important within a socio-cultural environment. Music allows us to cultivate such emotional states that are most effective in reaching our cultural goals in relation to our natural environment and other individuals within our social group.</p>
          <p>Typology of music structures (i.e. melodic and rhythmo-metric patterns that allow us to recognized a lullaby or a march) usually supports typology of important activities (lulling a child to sleep or stimulating an energetic walk), where a genre of music brings the emotional experience of the participants to a single psycho-physiological denominator. The mechanisms of entrainment, cross-modal perception of sounds, and conventions of a finite set of structural patterns of melody, harmony, and rhythmo-metric organization, together, secure objectivity in musical experience amongst different listeners. Not surprisingly, lullaby relaxes, while march envigorates.</p>
          <img
            src={image2}
            alt=""
            className={classNames(
              `${baseClass}__img`,
              `${baseClass}__img--left`,
              `${baseClass}__img--landscape`,
            )}
          />
          <p>Of course, there still remains a vast area for connotations that are subjectively perceived and whose main function is to serve as a means of self-reflection for an individual to relate his experience of the same music over time to earlier instances of its performance, and thereby become aware of the changes in his own personality.</p>
          <p>All in all, the primordial power of music to suggest certain cognitive schemes of representation of perceptual reality, and to instill emotional states in people is strongly undervalued, as I see it. The use of music for political purposes, such as military or national anthem, and as it has recently emerged, for the practice of cognitive marketing in businesses, presents only the tip of the iceberg of how music shapes our lives.</p>
          <p>I’ve come to the conclusion that music can be semiotically described as a language of affects that can be explained today based on modern scientific principles. The lineage of regarding music as a language of feelings, spanning from Antiquity to the early 20th century, can and should be restored on a new foundation – as brought to light and supported by the most recent findings of neurophysiology and developmental epistemology. The preliminary insight into the history of the 20th century leads me to believe that this tradition and its closely related tradition of public discourse about the positive and negative influence of exposure to certain types of music have been censored for political and economic reasons.</p>
          <p>As a result, the modern notion of political correctness is based on an overly individualistic view of music, promoting the postulate that anything can be music and that a music work, including its “emotional” meaning, can mean anything to anyone.</p>
          <img
            src={image3}
            alt=""
            className={classNames(
              `${baseClass}__img`,
              `${baseClass}__img--right`,
              `${baseClass}__img--landscape`,
            )}
          />
          <p>Such view seems to be the vestige cultivating the “abstract-expressionist” ideology of the times of the Cold War, which was called forth to challenge the ideology of “people’s music” in the Communist regimes. The second half of the 20th century marked the penetration of this initially state-launched ideology, into all cultural management organizations and the academia, in the West, and eventually destroying the ideology of “socialist realism” including its implementation in some Western countries such as France or Italy, and in parallel, affecting all other forms of “people’s music.”</p>
          <p>The most obvious blow was struck against the folk oral traditions, which became replaced by popular music in most Western countries, especially the United States where many children grow up without an inkling of what American folk music actually is. Adamant commitment to the “innovative” model of development of music grammar, as accepted in the musical establishment, has caused a deep split between serious and popular music, depriving classical music of providing compositional models for creators of popular music.</p>
          <img
            src={image4}
            alt=""
            className={classNames(
              `${baseClass}__img`,
              `${baseClass}__img--left`,
              `${baseClass}__img--landscape`,
            )}
          />
          <p>After classical music turned on the rails of modernism, popular music couldn’t follow its footsteps since in order to survive it had to stick to conventional forms of expression. Having lost its footing, popular music began to go “wild,” loosening the institution of professional composition, and ending up where every performer turned into a songwriter. In the popular music business of today, singers are expected to author their own songs, so, a cover-song has become an exception to the rule.</p>
          <p>And in popular dance music, the change became even more drastic. In the first half of the XX century, writing new music for dances was still in hands of professionally trained composers: tango “Jalousie” by Jacob Gade, “Charleston” by James Price Johnson, jazz tap-dance “Slap this Bass” by George Gershwin, cha-cha-cha “La engañadora” by Enrique Jorrín, many mambos by Pérez Prado. By the end of the XX century music for popular ended up in hands of disc jockeys, many of whom have no any musical background at all! Not only the expertise in how to combine melodic, rhythmic and harmonic patterns was thrown out of the window – even the expertise in playing music on some instrument or singing it became unnecessary for professional dance making. There is little surprise then that the dance steps of modern social dances suffered tremendous simplification (with exception of perhaps only breakdance) – turning into the most primitive and unimaginative trotting on one place.</p>
          <img
            src={image5}
            alt=""
            className={classNames(
              `${baseClass}__img`,
              `${baseClass}__img--right`,
              `${baseClass}__img--landscape`,
            )}
          />
          <p>This created havoc of overproduction of poor quality that which flooded the marketplace, making it difficult for music consumers to find products that would contain viable and diverse expression of musical emotions. Now we have a situation where “fish doesn’t know it’s wet”: many young consumers simply have no point of reference as to which music is richer in emotion.</p>
          <img
            src={image6}
            alt=""
            className={classNames(
              `${baseClass}__img`,
              `${baseClass}__img--left`,
              `${baseClass}__img--landscape`,
            )}
          />
          <p>After all, emotional intelligence also requires competence, while modern pop music consumption unfortunately instills a standard of background passive listening where the consumer doesn’t have to know anything about the music he is listening to. Such fantasizing (to me this music means…) has turned pretty much into commonplace.</p>
          <p>As with every form of expression, whether acting in theatre or words in literature, music expression too historically became an art that requires certain qualification in order to effectively convey a particular emotional state. Active communication always requires greater expertise than passive communication. That is why the entire development of Western civilization has led to the emergence of the profession of the composer. Maintaining the practice of professional composition with the intention to convey emotional information is crucial for setting a point of reference for the music industry.</p>
          <p>This and the excessively individualistic mode of consumption of popular music, exemplified by widespread devices for personal listening, such as the car radio, iPod, mp3 player, in my view, are the musical challenge of our time.</p>
          <p>As such, I see my responsibility in:</p>
          <ol>
            <li>building a methodology for teaching music that would be true to its collective and emotional roots;</li>
            <li>investigating the biologically grounded features of music;</li>
            <li>exposing the general public to the idea of how music affects our lives, so that hopefully this would bring about expertise that would mediate public policy to determine the kind of music that is in the best interests and well-being of people; </li>
            <li>compose music that would restore the traditional means of semiotic organization.</li>
          </ol>
          <img
            src={image7}
            alt=""
            style={{display: 'block', textAlign: 'center', maxWidth: '100%'}}
          />
        </Box>
      </Flex>
    </div>
  );
};

Statement.propTypes = propTypes;

export default Statement;
