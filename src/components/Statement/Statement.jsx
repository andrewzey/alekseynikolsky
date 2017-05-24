import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';
import classNames from 'classnames';

import './Statement.css';

import { IMAGE_HEIGHT_WIDTH_RATIO_HERO } from '../../constants';

import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import HeroOverlay from '../HeroOverlay/HeroOverlay';

import HeroImage from '../../images/statement/statement-hero-school-of-athens.jpg';
import towerOfBabel from '../../images/statement/tower-of-babel-bruegel-the-elder.jpg';
import timesSquareAds from '../../images/statement/times-square-ads.jpg';
import theBigThree from '../../images/statement/the-big-three.jpg';
import barcelonaFleaMarket from '../../images/statement/barcelona-flea-market.jpg';
import momDadBaby from '../../images/statement/mom-dad-baby.jpg';
import tribalDance from '../../images/statement/tribal-dance.jpg';
import mindControl from '../../images/statement/mind-control.jpg';
import theIwwIsComing from '../../images/statement/the-iww-is-coming.jpg';
import violenceVandalism from '../../images/statement/violence-vandalism.jpg';
import sokushinbutsu from '../../images/statement/sokushinbutsu.jpg';
import wishfulThinking from '../../images/statement/wishful-thinking.jpg';
import isolationAndDeathInCity from '../../images/statement/isolation-and-death-in-modern-city.jpg';
import musiciansSearchingForAudience from '../../images/statement/musicians-searching-for-audience.jpg';

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
            <p>It took me years to finally resolve a disconcerting contradiction which I experienced as an artist / musicologist, and as a consumer of music.</p>
            <p>I needed to understand what had caused the unifying and enlightening role of music that was established and functioned as such for centuries in Western civilization, to so quickly fragment in myriad of roles.</p>
            <p>In Western society of today, each consumer of music is entitled to enjoy the role that music plays in his life, exclusively for him. He feels comfortably in charge of how and to which extent he is deems himself “enlightened”. There is little uniformity between these individual “roles” that music plays. They usually contradict one another, and more often cause people to reject one another’s values rather than integrate them. Especially as people grow older they tend to find themselves quite isolated in their vision of what constitutes “good music.”</p>
          </HeroOverlay>
        </Box>
        <Box col={12} sm={12} p={2}>
          <p>Today, everyone has become “special”. The originally collective nature of music communication, based on rather clear conventions, has ended up broken into a consumer-oriented egocentric game of make-belief: to me this music expresses joy, whereas to you the very same music might express sadness. And what exactly is it that this music actually expresses? – only the shadow knows! Music speaks to everyone, but everyone hears something different, like in a Chinese Whispers game. The days when music could call an entire nation to a great deed are gone. Schiller’s “You, millions, I embrace you!” as used by Beethoven in his 9th symphony’s “Ode to Joy,” sounds like a gobbledygook to most listeners. Music consumer of today does not want to embrace millions; he just wants to enjoy his favorite “beat,” all for himself, as an <i>individual</i>.</p>
          <img
            src={towerOfBabel}
            alt="Tower of Babel by Bruegel the Elder"
            className={classNames(
              `inline-img`,
              `inline-img--left`,
              `inline-img--landscape`,
            )}
          />
          <p>This, by no means is to say that there is anything wrong in the political philosophy of individualism. In fact, this political philosophy has served as the staple of modern civilization in matters of human rights and morality. But it seems that everything that could go wrong went wrong with the communication of music. Once so certain in communicating emotional information, the language of music has lost much of its meaning, and has fallen apart like the construction of the Tower of Babel.</p>
          <p>Industrialization of music is what has played the major part in this disintegration.  It was in the 18th century that in the West music started to turn into business. And during the course of the 20th century music turned into Big Business. Through a chain of mergers and acquisitions of private companies, music ended up being divided into various industries – recording, publishing, and entertainment – each controlled by a handful of giant corporations, running their business in a Pall Mall agreement. As such, there is little space left for the outsiders to reach out with their music. They are free to speak through their music in their bathrooms. But in order to be heard outside of their little orbit they have to be accepted by the industry.</p>
          <img
            src={timesSquareAds}
            alt="Times Square Ads"
            className={classNames(
              `inline-img`,
              `inline-img--right`,
              `inline-img--landscape`,
            )}
          />
          <p>Only recently has this state of affairs began to change, when a few musicians were able to reach international acclaim through new communication channels available on the Internet. However, this option is far from optimal for everybody. For most musicians, Internet remains a giant flee-market bazaar, filled up with millions of sellers, each crying his goods, and a limited group of buyers overwhelmed by their noise.</p>
          <p>The current state of affairs is mostly the doing of the cultural management by Big Business during the second half of the 20th century.</p>
          <p>I would say that the “big three” of today’s music: Warner Brothers, Sony, and the Universal, which together control almost 90% of the world market of audio production, have no idea what they have done and are actually doing to the world.</p>
          <img
            src={theBigThree}
            alt="The Big Three"
            className={classNames(
              `inline-img`,
              `inline-img--left`,
              `inline-img--landscape`,
            )}
          />
          <p>Starting from the 1990s, things started to fall apart in the cultural management of these companies. The emergence of Internet exposed the failure of cultural management of major labels, and the dynamics goes in the direction of their decline – to be replaced by the giant garage sale of billions of music works. Practically, for a consumer of music this means tumult of performances from which to choose - without the guidance of a knowledgeable salesman. Looking for the right music here is like looking for a needle in a haystack of songs.</p>
          <img
            src={barcelonaFleaMarket}
            alt="Barcelona Flea Market"
            className={classNames(
              `inline-img`,
              `inline-img--right`,
              `inline-img--landscape`,
            )}
          />
          <p>No wonder! Andersen said “Music speaks where words fail.” But, today, instead of <i>speaking where words fail</i>, instead of putting the listener in touch with his inner feelings, and instead of aligning these feeling with the inner feelings of others, our contemporary music “mumbles” something and spits out whatever that the consumer fancies it to be.</p>
          <p>In this view, the solipsistic tendency of making sense out of music adds even more confusion to the music marketplace. In the past few decades, in particular, the craze for individualized abstraction of music has ran havoc with accelerating pace, pretty much nullifying the tradition of objective musicological analysis of music form, as well as the aesthetic and ethical evaluation of music that characterizes all the great civilizations, including the Western civilization. The resulting collapse of musical communication as an organizing societal power is hard to qualify as anything but a <i>cultural</i> demise of the natural <i>biological</i> function of music.</p>
          <img
            src={momDadBaby}
            alt="Mom, Dad, and Baby"
            className={classNames(
              `inline-img`,
              `inline-img--left`,
              `inline-img--landscape`,
            )}
          />
          <p><i>Biological function</i> of music is most obvious in the traditional music of indigenous people and in the use of music by babies and their caretakers in Western societies.</p>
          <img
            src={tribalDance}
            alt="Tribal Dance"
            className={classNames(
              `inline-img`,
              `inline-img--right`,
              `inline-img--landscape`,
            )}
          />
          <p>Such music regulates the emotional state of its participants. It acts as a mediator between the personal interest of each participant within the social group (be it within a tribe or a family) and the interest of the social group as a whole, by whatever might be the best match for both. This function of music was sustained throughout the prehistoric times as well as the early history of humanity. The music of great civilizations picked this emotional aspect and employed it as a tool for political and religious cultural influence.</p>
          <p>Music designed for personal consumption, such as entertainment, also existed but remained somewhat secondary in its importance, often regarded as trivial and even vulgar, according to what we know of Ancient Babylonian, early Chinese, and Vedic traditions. The principal effect of music was to <i>communicate emotional information that was important for a given society so that its listeners would be emotionally moved in more or less the same way towards the same course of action/behavior</i>. Therefore, such traditional music had strong collective and unifying effect, working pretty much like an orator’s speech designed to unite the audience in experiencing a particular affect.</p>
          <p>This system worked well until the beginning of the 20th century. At first, communist, then fascist, and eventually democratic governments began viewing music as a highly effective ideological weapon.</p>
          <img
            src={mindControl}
            alt="Mind Control"
            className={classNames(
              `inline-img`,
              `inline-img--left`,
              `inline-img--landscape`,
            )}
          />
          <p>To nurture the music that they considered politically beneficial, and to obstruct the music that was considered politically undesirable, they employed power and money. The entire welfare system, which by that time was formed to lead the industrial nations, made it possible to politicize the production and consumption of music as well as the institutions of music education and the occupation of the music critique. As a result, music markets became disorganized, skewed, and lost much of the information that constituted the consumer’s knowledge of what formed a quality product.</p>
          <p>Yet, Adam Smith was warning about the importance of <i>consumer education</i> for a capitalistic organization to stay effective in balancing the needs of an individual and the society as a whole. Political interference in music business broke the back of a long-standing tradition of music appreciation in the West. Using music in the psychological warfare against the countries of the Socialist camp in the 1950s, altogether annihilated the old traditional institutions of music appreciation, along with the folk music traditions which acquired the negative connotation of being too populist and therefore potentially “socialist” – where such concerns were most noticeable in the US.
</p>
          <img
            src={theIwwIsComing}
            alt="The IWW is Coming"
            className={classNames(
              `inline-img`,
              `inline-img--right`,
              `inline-img--portrait`,
            )}
          />
          <p>Economic and cultural dominance of US in the postwar world unleashed its cultural expansion in the world. “Feelings for sale” model of the popular music industry, as well as “money for innovation” model of the classical music industry became the staples of music business worldwide, eventually breaking cultures of the Communist countries – that adhered to the tradition of collective use of music. Today, the Western music industry rules the world. But the music it produces and markets can hardly be called healthy. Like a potent biological bomb, music’s psychological warfare has left the world’s music in a contaminated state.</p>
          <p>Music can indeed be “healthy” in that it has the capacity to heal - as evident in the significant success of music therapy in treatment of even the most serious diseases, such as Alzheimer. But anything that can cure can also hurt. Music is no exception. Modern religion of “political correctness” where <i>anything</i> is entitled to a place, seeks to taboo public discourse and scientific examination of cases where music exercises detrimental influence on the wellbeing of the individual or the social group. The connection between heavy metal and antisocial behavior is an example of an unhealthy culture.</p>
          <img
            src={violenceVandalism}
            alt="VIolence and Vandalism"
            className={classNames(
              `inline-img`,
              `inline-img--left`,
              `inline-img--portrait`,
            )}
          />
          <p>The myth that every culture is “right,” and that every music is great in its own way, keeps hurting the culture by allowing it to carry on sweeping dust under the carpet. Not every culture is healthy! A culture can indeed be sick. Take the Sokushinbutsu culture of mummifying oneself alive in sake of reaching religious bliss. This, a self-destructive culture, cannot be qualified as healthy. </p>
          <p>Modern Western civilization is caught into the spell of “freedom of expression” and “pluralism of values,” and has consequently become hopelessly confused. What is grossly neglected here is the <i>biological value</i>.</p>
          <img
            src={sokushinbutsu}
            alt="Sokushinbutsu"
            className={classNames(
              `inline-img`,
              `inline-img--right`,
              `inline-img--landscape`,
            )}
          />
          <p><i>Every cultural value should be held against the biological value</i>. That which causes death, suffering, and reduction in wellbeing should be regarded as an unhealthy cultural value. Yet, the reverse is precisely what we observe in the current state of Western music. Its classical branch has degenerated into a mechanistic construction of elements according to some arbitrary compositional principles that go against the biological norms of perception of music. The new compositional methods use rhythmic, melodic and harmonic patterns that are imperceptible by the ear, or that they do not comprise an intelligible musical phrase, sentence and music form for the entire composition.</p>
          <p>Although the popular music branch does not violate the biological principles of music as much, it does, however, display a growing tendency for abstraction: instead of communicating emotions through musical idioms – which is a normal mode of musical communication – popular music of today resorts to the “make-belief” mode of personal consumption: where the listener is free to fantasize anything he wishes along the lines vaguely suggested primarily by the lyrics with the help of histrionics, costumes, stage design, etc. What is not engaged in the emotional communication in such music, are the melodic structures, patterns of rhythm, and progressions of harmony – all of which, nowadays, usually present some cliché musical patterns and sound. Therefore, the heart of music – the musical structures per se – no longer conveys any meaning. Hence, the biological function of music has become impaired. Subsequently, the entire Western music industry favors those cultures that deny the biological roots of music, and cater to the inclinations, whims and impulses of “isolated” individuals – who wish a particular musical composition to express that which they like.</p>
          <img
            src={wishfulThinking}
            alt="Wishful Thinking"
            className={classNames(
              `inline-img`,
              `inline-img--left`,
              `inline-img--landscape`,
            )}
          />
          <p>Unsurprisingly, this situation has already caused the classical music tradition to die out – no major music works have recently been created that would carry on this legacy after Shostakovich, Sibelius and Walton. Great tradition of American jazz has also followed the same path to decline in social importance, and oblivion, having fallen victim of the same fate. And Western popular music is already seriously ill, becoming progressively more stereotypical and stunting in its stylistic development in the past 20 years.</p>
          <p>By every decade, music experience becomes more and more personal, bound by the use of personal devices such as iPod or mp3 player. And music concerts do not offer a viable alternative to this. Even the most widely attended rock concert arenas only look as though they are unifying the audience in some collective experience. In reality, every crowd member dwells in his own “universe,” sensing the spectacle in his own “unique” way: by merely purchasing a ticket he has now bought his way to such experience. All such gestures as stretching arms up in the air, waving hands and waving from side to side, jumping up and down, rolling and twirling, etc. are all meaningless rituals of “getting the crowd going” in order to run the show. The whole concert is nothing but a ritualized action of invoking a sense of togetherness and participation in an important emotionally charged event <i>without actually understanding the message of musical structures</i> – a kind of hullabaloo “quick fix,” that acts as a substitute for emotional deficiency and isolation.</p>
          <p>I would say that <i>it is impossible to share an emotional experience from perceiving musical emotion</i> without <i>comprehending the specific musical idioms</i> of melody, rhythm and harmony – each carrying a particular emotional message that is fixed by the social convention. Collective experience of emotion is a matter of competence in understanding signs that are used to convey emotions. A person who does not know any idioms can only be receptive to the most primitive aspects of sound, such as its loudness and timbre. But “interpreting” soft pleasant timbres as the expression of love, or loud unpleasant timbres as the expression of anger, can hardly constitute a base for adequate “interpretation” of a musical composition. And for this reason, it cannot secure uniformity in understanding of music - which is necessary for genuinely living through a collective experience.</p>
          <p>And <i>without generating a collective experience, music cannot execute its biological function</i>, leaving every individual to his own devices.</p>
          <img
            src={isolationAndDeathInCity}
            alt="Isolation and Death in a Modern City"
            className={classNames(
              `inline-img`,
              `inline-img--right`,
              `inline-img--landscape`,
            )}
          />
          <p>Correcting this dangerous cultural mismanagement is the challenge of our time. The ease with which to create music and publish it has flooded the market with zillions of meaningless clones that give an illusion of music that is made up of standard chord progressions filled up by some recitative-like melodies. In the absence of any guidance in music quality (which today is considered “politically incorrect”) the sheer number of such songs makes it nearly impossible for average music users to educate themselves and therefore to exercise educated judgment in patronizing healthy music.</p>
          <p>As such, I see my responsibility in:</p>
          <ul>
            <li>Building a methodology for teaching music that would be true to its collective and emotional roots.</li>
            <li>Investigating the biologically grounded features in music.</li>
            <li>Exposing the general public to the idea of how music affects our lives, so that hopefully this would bring about expertise that would install such public conventions that would encourage and promote the kind of music that is in the best interests and wellbeing of people.</li>
            <li>Composing music that would restore the traditional means of semiotic organization.</li>
          </ul>
          <p>I hope that these measures would inspire and motivate creators of new music to find and restore ways to connect to wide audiences of today.</p>
          <img
            src={musiciansSearchingForAudience}
            alt="Musicians in search of their audience"
            className={classNames(
              `inline-img`,
              `inline-img--center`,
            )}
          />
        </Box>
      </Flex>
    </div>
  );
};

Statement.propTypes = propTypes;

export default Statement;
