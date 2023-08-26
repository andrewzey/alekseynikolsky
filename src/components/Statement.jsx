/** @jsx jsx */

import {jsx} from '@emotion/core';
import styled from '@emotion/styled/macro';
import {Helmet} from 'react-helmet';
import {Box, Flex} from 'rebass';

import HeroImage from '../images/statement/statement-hero-school-of-athens.jpg';
import HeroOverlay, {HeroOverlayPar, HeroOverlayTitle, HERO_OVERLAY_TYPES} from './HeroOverlay';
import ResponsiveImage from './ResponsiveImage';
import antiquityMusic from '../images/statement/antiquity-music.jpg';
import ascension from '../images/statement/ascension-darryl-daniels.jpg';
import barcelonaFleaMarket from '../images/statement/barcelona-flea-market.jpg';
import biomusicology from '../images/statement/biomusicology.jpg';
import composer from '../images/statement/composer.jpg';
import culturalEconomics from '../images/statement/a-textbook-of-cultural-economics.jpg';
import happyBaby from '../images/statement/happy-baby.jpg';
import kidsSinging from '../images/statement/kids-singing.jpg';
import lolaAstanova from '../images/statement/lola-astanova.jpg';
import masks from '../images/statement/masks.jpg';
import mindControl from '../images/statement/mind-control.jpg';
import musicAndCopyright from '../images/statement/music-and-copyright.jpg';
import musicSpeaks from '../images/statement/music-speaks.png';
import popMusicFans from '../images/statement/pop-music-fans.jpg';
import ruthlessViolence from '../images/statement/ruthless-violence.jpg';
import sokushinbutsu from '../images/statement/sokushinbutsu.jpg';
import theBigThree from '../images/statement/the-big-three.jpg';
import theIwwIsComing from '../images/statement/the-iww-is-coming.jpg';
import towerOfBabel from '../images/statement/tower-of-babel-bruegel-the-elder.jpg';
import tradFolkBand from '../images/statement/traditional-folk-band.jpg';
import tribalDance from '../images/statement/tribal-dance.jpg';
import {BODY_TEXT_STYLE, IMG_STYLES, MEDIA_QUERIES} from '../styles';
import {IMAGE_HEIGHT_WIDTH_RATIO_HERO} from '../constants';
import {Par} from './common';

const Wrapper = styled.div({});

const HeroBox = styled(Box)({
  position: 'relative',
});

const StatementPar = styled(Par)({
  marginBottom: '1rem',
});

const StyledList = styled.ul({
  listStyle: 'circle',
  listStylePosition: 'outside',
  margin: '0 3.75rem',
  [MEDIA_QUERIES.breakpoints[1]]: {
    listStylePosition: 'outside',
    margin: '0 2rem',
  },
});

const StyledListItem = styled.li({
  ...BODY_TEXT_STYLE,
  paddingLeft: '1rem',
  marginBottom: '1rem',
  [MEDIA_QUERIES.breakpoints[1]]: {
    paddingLeft: '0.75rem',
    marginBottom: '0.75rem',
  },
});

const Statement = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Aleksey Nikolsky - Statement of Purpose</title>
      </Helmet>
      <Flex flexWrap="wrap" justifyContent="center">
        <HeroBox width={[12/12, 12/12, 12/12]} padding={2}>
          <ResponsiveImage
            src={HeroImage}
            alt="Library filled with Books"
            heightWidthRatio={IMAGE_HEIGHT_WIDTH_RATIO_HERO}
          />
          <HeroOverlay type={HERO_OVERLAY_TYPES.STATEMENT}>
            <HeroOverlayTitle>What Life has Taught me About Music</HeroOverlayTitle>
            <HeroOverlayPar>It took me years to finally resolve a disconcerting contradiction which I experienced as an artist / musicologist, and as a consumer of music.</HeroOverlayPar>
            <HeroOverlayPar>I needed to understand what had caused the unifying role of music, which was established and carried out for centuries in Western civilization, to so quickly fall apart and lose its power.</HeroOverlayPar>
            <HeroOverlayPar>In Western society of today, each consumer of music can enjoy a particular role that music plays in their life. People feel comfortably in charge of how and to what extent they can please themselves. In particular, the last couple of decades has accelerated the division within audiences where everyone appreciates the kind of music they enjoy and is dismissive of what another likes. As I see it, there are a number of reasons for the near disappearance of public discourse about music – which used to occupy an important place in Western societies, from Antiquity to the first half of the 20th century.</HeroOverlayPar>
          </HeroOverlay>
        </HeroBox>
        <Box width={[12/12, 12/12, 12/12]} padding={2}>
          <StatementPar>The originally collective nature of music communication, based on rather clear conventions, has been broken into a consumer-oriented egocentric game of make-belief: to me this music expresses joy, whereas to you the very same music might express sorrow.</StatementPar>
          <StatementPar>Much of this probably has to do with the spread of personal consumption of music (smart phones, headphones) and background listening. Inattentive listening promotes superficial appreciation of the most salient aspect of sound, leading to lack of comprehension and interpretation of the music structures. And personal consumption removes the opportunity for co-listeners to direct one another’s attention to specific instances of expression.</StatementPar>
          <StatementPar>It seems that everything that could go wrong went wrong in the communication of music. Once so natural as a means of transmission, the language of music has lost much of its meaning, and has fallen apart like the construction of the Tower of Babel.</StatementPar>
          <img
            src={towerOfBabel}
            alt="Tower of Babel by Bruegel the Elder"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Most newly produced classical compositions adhere to the avant-garde fashion of inventing new and original grammars, disregarding whether audiences actually can hear and make sense of them. Creators of popular music are more concerned about communicating to their listeners than their classical colleagues. But they face their own problem – during the last 30 years, new songs have become more and more stereotypical, because many artists try to emulate the current hit songs. And the expression of new songs comes mostly not from music structures but from non-musical sources, such as the lyrics, the singer’s mimics and gestures, the kind of persona projected by their bio and offstage behavior…</StatementPar>
          <img
            src={kidsSinging}
            alt="Kids Singing"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>The appreciation of old music is also on decline, because music education has been severely cut in the U.S. primary school curricula. Modern consensus is that studying music is for those who have talent. But many of them still don’t pursue music education, since the music profession is nowhere close to being as lucrative for their success as math, computer science, or physics. Worse still is that those who go to music schools are required to study modern textbooks that pale compared to the old ones. Almost all new textbooks downplay matters of expression, and their presentation and description of specific music structures are way too formalistic, often entirely missing the semantic aspect – which is the most valuable for comprehension of music. Music curriculum is simplified below the bare minimum necessary to grasp the expression of a music composition. The most critical omission is the absence of proper ear-training in general education. Ideally, every person should receive basic ear-training in preschool and elementary school.</StatementPar>
          <StatementPar>The industrialization of music has played a major role in this disintegration.  It was in the 18th century that in the West music started to turn into business. And during the course of the 20th century music turned into Big Business. Through a chain of mergers and acquisitions of private companies, music ended up being divided into various industries of recording, publishing, distribution, artistic management, live performance, and entertainment – each controlled by a handful of giant corporations that establish rules of the game. These rules are not always beneficial for the general public. A good example is the gradual expansion of the copyright terms for a music composition to cover the author’s lifetime plus 70 years thereafter, and in case of a work-for-hire, for 95 years from the date of its first publication or 125 years from its creation, whichever comes first! For comparison, the terms for protecting a newly invented medicine is only 10-15 years. Why is a new song, often ineffective in its expression, 10 times more precious than an effective medicine that can save lives?</StatementPar>
          <img
            src={musicAndCopyright}
            alt="Music and Copyright"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Western institution of copyright is fundamentally biased in favor of Western notions of authorship and originality as they were held by the aesthetics of early Romanticism (circa 1800’s) – the dominant ideology in the Western society during the time when the copyright laws were finalized in most Western countries. It was Romantic art and Romantic criticism that placed a heavy emphasis on creativity of the artist. The artist’s ability to conceive unusual ideas was perceived as artistic “genius”, with all the ramifications of social prestige. Opposition of “genius” to “commerce”, so typical for Romantic philosophy, determined an unequivocal bias in glorification of the “original” work and debasement of the “derivative” work. The originator of a style was celebrated as a hero, whereas any follower of that style was mechanically turned into a sidekick, no matter how creative his contribution to that style was. Similarly, an artist who had based his work on the work of another artist was viewed as taking financial advantage of them by free-riding on their talent.</StatementPar>
          <StatementPar>But in reality, the body of an artwork is rarely, if ever, an invention – it is usually built from pre-existing elements: melodic motifs, rhythmic patterns, and harmonic progressions. The so-called “greats” are not revolutionaries, but “evolutionaries.” Every case of artistic break-through is an end result of a long incremental build-up based on the collaborative efforts of many professionals in the field. Copyright laws tend to disregard any social aspects of authorship, and instead focus on the “heroic” style authorship, characteristic of Romantic aesthetics. Subsequently, any music based on reiteration of a narrow stock of musical idioms (like blues), variation (i.e. fiddle dance music), and improvisation (jazz) finds itself at a serious disadvantage in its legal standing. In essence, music that is conceived without notation, by improvising on an instrument, or by reproduction of some ideas by ear, is deprived of the status of intellectual property.</StatementPar>
          <img
            src={tradFolkBand}
            alt="Traditional Folk Band"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>One of the principal downsides of the Romantic bias of the copyright law is that it encourages appropriation of folk material by professionally trained composers. Anyone can take a folk tune, make a little adaptation to it and register it in the Copyright Office. In fact, this is exactly what took place in the U.S.: for instance, Rev. Marvin Frey explicitly claimed to have composed such famous spirituals as “Kumbaya” and “I’ve got peace like a river” – that were broadly in circulation before the date of his supposed “composition”, as supported by abundant evidence.</StatementPar>
          <StatementPar>Some “authors” went on to build their entire career on appropriated folk music. The best example of this is W.C. Handy, the world’s greatest “stenographer of blues” – who compensated for his lack of artistry in blues performance by his transcription of music created by more talented performers. The law enabled him to register someone else’s improvised music as his own and profit from it, taking advantage of the law, the illiteracy of the real authors and their poor social standing. Although the case law provides a way for validation of claims of authorship, nevertheless, this opportunity hardly suffices to prevent misappropriation of folk material – which hurts the public interest, since the pool of music in public domain is reduced by appropriators such as Frey or Handy.</StatementPar>
          <img
            src={theBigThree}
            alt="The Big Three"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Consolidation of music industries, the astronomical increase of their lobbying power, the shift of copyright law and its enforcement from protecting the public interest to protecting the interests of music industries – have all contributed to a situation where there is little that an artist can actually achieve without the help of some industry insider or gatekeeper of some philanthropic fund.</StatementPar>
          <StatementPar>Only recently, when a few musicians were able to reach international fame through the Internet, has this state of affairs begun to change. However, the Internet option is far from optimal for everyone. For most musicians, the Internet remains a giant flea-market, overcrowded with millions of sellers, each loudly advertising his goods, and a limited group of buyers overwhelmed by their noise. Internet advertising is overwhelming enough where people are willing to pay for applications and extensions to block these ads or even forgo the pain of hacking Youtube to prevent it from displaying ads. Not only every music business, almost every professional musician tries to sell something via their website and social media pages, and consumers have little to no chance to verify their claims and filter out the products they don’t want.</StatementPar>
          <img
            src={culturalEconomics}
            alt="Cultural Economics Textbook"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>The Big Business of music, throughout the second half of the 20th century, has put in place a new cultural management scheme that is based on the formula of overproduction. The game of bidding on a single hit record to reach platinum sales in order to pay for dozens of losing records was invented by the record industry in the 1960-70s and was eventually picked by other industries. More, faster, and cheaper to produce – as long as the public keeps buying - has become the modus operandi. There is no place for quality control in this overproduction model. Modern music industry is the only one that operates by following the principle of “no one knows,” where no industry expert can reliably predict which song will be the winner, and which the loser – no matter how great the expert’s expertise or experience. That is why the entire industry has adopted the strategy of the lottery - something that finds no parallel in traditional music cultures. All known music traditions operate by effective communication of emotion and imagery through music structures, whether intuitively or rationally.</StatementPar>
          <StatementPar>The emergence of the Internet has exposed the failure of the cultural management of major labels. Practically speaking, for a consumer of music, this poses the need to somehow scan through zillions of available products - without the guidance of, say, a music critic, a magazine, or a blog. Looking for the right kind of music has become like looking for a needle in a haystack of songs.</StatementPar>
          <img
            src={barcelonaFleaMarket}
            alt="Barcelona Flea Market"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Most consumers of music today look for something similar to a shopping experience (at least how it was prior to COVID) of going through a shopping mall or a department store, window shopping, looking for something that they might like to purchase or for anything useful on sale. And most producers of music today don’t bother to characterize their products adequately. Quite the opposite, they try to make the description of their work as general and attractive as possible to “sell a pig in a poke.” The internet is filled with exaggerated claims. False advertising has become a new norm. And the figure of an independent curator (e.g., critic, radio host, disc-jockey) whose judgment used to be taken seriously, is a bygone thing. Consumers are left to their own devices. There is an overproduction crisis and most products are of low quality. The only alternative left to the consumer is to look around and try to listen to as many products as possible - a very unrewarding strategy. It mostly brings dissatisfaction and a sense of wasted time and money. Reviews of other consumers are of little help here, since very few reviewers talk about objective things like musical structures – most evaluations are subjective: “I like it” or “I don’t like it.”</StatementPar>
          <StatementPar>Mendelssohn famously said: “Even if I had a particular word or words in mind, I often would not say them, because the same word means different things to different people. It is only songs that say the same thing and arouse the same feeling in everyone - a feeling that can't be expressed in words.”</StatementPar>
          <img
            src={musicSpeaks}
            alt="Where words fail, music speak"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>But, today, instead of <i>“where words fail, music speaks”</i>, instead of putting the listener in touch with his feelings through music, and instead of aligning these feelings with the feelings of others, the contemporary music “mumbles” something and spits out whatever the consumer fancies it to be. And this applies not only to the modern classical composer who either doesn’t wish to use conventional idioms or simply doesn’t have enough technique to do so – and leaves their audience confused.</StatementPar>
          <StatementPar>I remember witnessing such a scene at the intermission of a recital at the Moscow Conservatory. An audience member approached one of the Soviet avant-garde composers and respectfully asked: “Your music sounds so strange and complex – what did you want it to express?” The composer paused for a moment and then answered: “I wanted my listeners to do exactly what you are doing now – to find out for themselves what the music is saying to them.” The listener then asked: “So, do you mean that you had no intention of communicating anything special through your music?” The composer smiled and patronizingly replied: “The music speaks for itself – my intentions don’t matter – every listener will hear my music in their own way. This is how things should be.” </StatementPar>
          <StatementPar>Such philosophy, initially adopted by composers, quickly found its way to performers and in their interpretation of old classical compositions. Instead of analyzing the score, learning about the genre and style of the composition, many performers would strive to come up with some original way to express music as long as it doesn’t sound anything like their predecessors. Needless to say, such “interpretation” only misleads and confuses the audience.</StatementPar>
          <StatementPar>Modern popular music is also suffering from the lack of understanding of music per se. The fans of such music fall for the look and the biographic story of an artist, the timbre of their voice, stage behavior, lyrics of the song they sing, etc.. Virtually no one today knows anything about or pays attention to musical structures. And now that young classical musicians have seen how popular artists successfully capitalize on their appearances, they are also beginning to follow suit, shifting their focus and energy to projecting a captivating persona rather than directing their time and effort towards understanding and interpreting music.</StatementPar>
          <StatementPar>Of course, there is nothing wrong with liking the look of an artist. It can even make one wish to listen to their music more, and there is no reason why the appearance of an artist should take away from the appreciation of their music. It may even heighten it. But when the attention to appearance substitutes the attention to music idioms, this creates a serious problem. People can no longer tell what’s there in music that makes it expressive or inexpressive, and stop rewarding those performers who make expressive music based on objective and rational interpretation, but don’t look attractive enough. In turn, performers stop trying to interpret music according to what is actually in the score and instead over-concern themselves with their stage presence. Then, composers ​​start becoming disincentivized from having to communicate through their music - after all, why try so hard when no one seems to care or understand? Subsequently, they lose their skills to create expressive music. And the vicious circle goes on.</StatementPar>
          <img
            src={antiquityMusic}
            alt="Antiquity music"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>That’s how the entire lexicon of a music culture starts deteriorating. And this is how music traditions die out. This is not that different from language. When too few people effectively communicate through language, it goes extinct and gets replaced by some new language. It would be quite tragic if the tradition of classical music, so rich in expression and built upon by the efforts of millions of artists and listeners throughout millennia, starting from its origins in Ancient Babylon and spreading over the entire world, would die out as a result of cultural mismanagement of the music industry.</StatementPar>
          <StatementPar>And yet this is where the current state of affairs is heading to. When people get used to low quality music, they start liking it, and it becomes the new norm.</StatementPar>
          <StatementPar>The past few decades, in particular, have put in place the fashion for what can be called “individualized abstraction.” The listener abstracts a certain impression from a favorite composition or a performance of it and becomes passionate about it. Another listener abstracts a different impression from the same thing and becomes as passionate about it. If both listeners happen to meet and talk about their likes and dislikes, they talk past each other. Now, you might ask: “What is wrong with being passionate about music? And why should everybody perceive or like the same thing?”</StatementPar>
          <StatementPar>Yes, it is true that individual differences in perception of the same thing  can result in interesting discussions, and therefore diversity is to be encouraged. And there is not a single "correct" way of listening to music. But in order to have an interesting discussion about the best possible options for interpreting a given music composition – be it a performer’s or a listener’s interpretation – it is imperative for all  the participants to be able to detect music idioms upon hearing music and to know the range of what each idiom can potentially express. But it is exactly this semiotic foundation of Western <i>classical</i> music, on which Western <i>popular</i> music is also based, that has become undermined by the ideology of originality and avoidance of conventional idioms (for legal or aesthetic reasons). Conventions require learning on the part of composers, performers, and listeners to learn them. And the policy of reducing this effort, adopted by the music industry in sake of greater ease of consumption and production to attain greater popularity, weakens conventions and locks music into the ivory tower of “abstract expressionism.” This applies not only to new classical compositions, but to performance of old classical compositions and production of new popular music as well. They all become “individually abstracted,” preventing communication and survival.</StatementPar>
          <img
            src={happyBaby}
            alt="Happy Baby"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>The resulting collapse of musical communication as an organizing societal power amounts to a demise of the natural <i>biological</i> function of music. The biological function of music is most obvious in the traditional music of indigenous people and in the spontaneous vocalizations of babies in Western societies.</StatementPar>
          <img
            src={tribalDance}
            alt="Tribal Dance"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Such music regulates the emotional state of its participants. It acts as a mediator between the personal interest of each participant within the social group (be it a tribe or a family) and the interest of the social group as a whole. If a tribe faces aggression from another tribe, and, say, one of its members becomes afraid for their life, the collective performance of a war dance-song might change the experience of fear into anger and thus enable a collective fight against the aggressor. This function of music was sustained from the prehistoric times to the early history of humanity. The music of great civilizations gave order to this emotional aspect – as in the theory of musical “ethos” that originated in Mesopotamia and became central to the Ancient Greek civilization. Ethos was a doctrine of the supposed psycho-emotional power of specific musical modes to influence the listeners in a certain way. Similar doctrines emerged in Ancient India and China, suggesting that the idea of regulating musical emotions to the benefit of an individual and a society was fundamental to social life in ancient civilizations. For Western classical music, the influence of ethos went on until the 18th century, carried by Christian authorities and neoclassical artists. And for non-Western classical traditions, such as maqam or raga, the theory of ethos remains as vital as for ancient people. Musical emotion has proved to be an effective tool for exercising political and religious cultural influences.</StatementPar>
          <img
            src={masks}
            alt="Masks"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Music designed for personal consumption also existed but remained somewhat secondary in its importance, often regarded as trivial and even vulgar, according to what we know of Ancient Babylonian, early Chinese, and Vedic traditions. The principal purpose of music was to <i>communicate emotional information that was important for a given society so that its listeners would be stirred in more or less the same way towards the same course of action/behavior.</i> Therefore, such traditional music had a strong collective and unifying effect, working pretty much like an orator’s speech designed to unite the audience in experiencing a particular affect.</StatementPar>
          <StatementPar>This system worked well until the beginning of the 20th century, when, at first, communist, then fascist, and eventually democratic governments began to view music as a highly effective ideological weapon.</StatementPar>
          <img
            src={mindControl}
            alt="Mind Control"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>To nurture the music that they considered politically beneficial, and to obstruct the music that was considered politically undesirable, they employed money and might. Music education and certain music productions became financed by governments of the most developed European nations starting from about the 1890s, when the welfare system was developed (financed by tax money) in order to increase the chances of military victory over the competing states. Education and music propaganda (usually nationalistic) became part of this system since they both have the power to direct the population towards certain goals and turn people against specific targets. The welfare system made it possible to politicize the production and consumption of music as well as to set music education policies and formulate postulates for music critique and propaganda. The governmental interference put those market players who did not comply with the official policies at financial disadvantage against those players who were financed by the government. As a result, music markets became fragmented, disorganized, skewed, and after a few generations, it lost much of the information that constituted the consumer’s knowledge of what formed a quality product.</StatementPar>
          <StatementPar>In the 18th century, Adam Smith was aptly pointing out the importance of consumer education for a capitalistic organization to stay effective in balancing the needs of individuals and the society as a whole. Political interference in the music business broke the back of the long-standing tradition of music appreciation in the West. The use of music in the psychological warfare against the countries of the Socialist camp in the 1950s, annihilated the old ways of music appreciation along with the folk music traditions which earned a negative connotation for being too populist and therefore potentially “socialist”. Those concerns were most noticeable in the US.</StatementPar>
          <img
            src={theIwwIsComing}
            alt="The IWW is Coming"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_PORTRAIT,
            }}
          />
          <StatementPar>Economic and cultural dominance of the US in the postwar world unleashed its cultural expansion in the world. The “feelings up for sale” model of the popular music industry, as well as the “money up for innovation” model of the classical music industry became the staples of music business worldwide, eventually breaking the cultures of the Communist countries - that still adhered to the tradition of collective use of music. Today, the Western music industry rules the world. But much of the new music it produces and markets can hardly be called “healthy”. Like a potent biological bomb, music’s psychological warfare has left the world’s music in a contaminated state.</StatementPar>
          <img
            src={ruthlessViolence}
            alt="Deeds of Ruthless Violence"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Music can indeed be “healthy” in a sense that it has the capacity to heal, as evident by the success of music therapy in treating severe diseases, such as Alzheimer’s. But anything that can heal can also hurt. Music is no exception. The modern religion of “political correctness”, where <i>anything</i> is entitled to having a place, discourages public discourse and scientific examination of cases where music exercises a detrimental influence on the wellbeing of the individual or the social group. The connection between heavy metal and antisocial behavior is an example of an unhealthy cultural influence. Such genres as death metal attract fans who have a propensity to anger and violence, and in turn, cultivate idioms that express anger and violence. Especially those fans who appreciate nothing but death metal, reinforce such negative emotions. Musical emotion is an emotion too, and experiencing it, in essence, is the same as encountering an event that triggers the same emotion. Just as it is not healthy to suffer fits of anger and compulsion to fight on a daily basis, it’s not healthy to enjoy angry and violent music every day either.</StatementPar>
          <StatementPar>The myth that every culture is “good,” and that every existing music is great in its own way, keeps hurting the culture with such a view. What if a culture is self-destructive? Take the Sokushinbutsu culture of mummifying oneself alive in sake of reaching religious bliss.</StatementPar>
          <img
            src={sokushinbutsu}
            alt="Sokushinbutsu"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Sokushinbutsu is a sect of Buddhism, and like all forms of Buddhism, it employs music to cultivate a certain mode of thinking. Many Eastern religions (e.g., Taoism, Lamaism, Bon) codify a “correct” way of reflecting on the perceptual reality into music structures. For Buddhism, the famous examples are vocalizations “uu-hm,” Tantric chants and mantras, singing bowl, and spontaneous improvisations on a string instrument solo. The Sokushinbutsu culture used music in an unhealthy way – as a sign of Amitabha Buddha descending to welcome suicide and as part of Nembutsu magic. Some of their musical accessories survived in the modern-day funeral customs of ethnic minorities (such as <i>sasara</i> – a bamboo-whisk used as a musical instrument in funerals).</StatementPar>
          <StatementPar>Modern Western civilization is caught up in the spell of “freedom of expression” and “pluralism of values,” and has consequently become hopelessly confused. What is grossly neglected here is the <i>biological value</i> of music.</StatementPar>
          <img
            src={biomusicology}
            alt="Biomusicology"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar><i>Every cultural value should be measured against the biological value.</i> That which causes death, suffering, and reduction in wellbeing should be regarded as an unhealthy cultural value. Yet, the reverse is precisely what we observe in the current state of Western music. Its classical branch has degenerated into a mechanistic construction of elements according to arbitrary compositional principles that either ignore or go against the biological foundation of music. The very experience of music is bound by the psycho-physiological constraints of our hearing organs and brain, which determine the cross-cultural universals of music. Majority of modern-day ethnomusicologists deny the existence of such universals and claim that every music culture is unique so that no cross-cultural comparison should be justified. Some go as far as qualifying any attempt to categorize music cultures and use scientific method of analyzing music structures as a form of Western “colonialism” of indigenous forms of music.</StatementPar>
          <StatementPar>Indeed, it’s hardly possible to name a single specific rule of tonal organization of music that wouldn’t have exceptions. However, it would be a far stretch to conclude from this that tonal organization of music is arbitrary. The extent of exceptions varies. Some rules are violated by hundreds of music cultures, whereas others – by one to two. Having one exception doesn’t prove a rule wrong. And there are true universals present in every single music culture. Thus, all forms of music are composite – they consist of smaller elements combined to form larger and larger compounds. All forms of music pattern use pitch and rhythm in some way. All genres of music are transposable – that is, the same kind of expression is reproduced by different performers at different instances of time. All traditional music features gradations of stability, where certain tones are held as more important than others. All music uses some kind of durational value for reference to distinguish between fast and slow music. And so on. Such universals are determined by the psycho-physiological limits of human hearing and processing of auditory information.</StatementPar>
          <StatementPar>It could be said that such limitations define biomusicological norms, violation of which obstructs communication of music and prevents conservation of music tradition. For instance, distinction between consonance and dissonance, melodic steps and leaps, regular and irregular rhythms, binary and ternary meters, slow and fast tempos, all constitute biomusicological norms. A music culture and a technique of composition that violates these distinctions becomes abnormal and potentially unhealthy. It is by this criterion that Western avant-garde techniques, such as serialism or aleatory, can be called fundamentally unmusical and qualified as “pseudo-music” or non-communicative “music design” – since serial or aleatoric compositions simply cannot be orally transmitted from person to person. Their patterning of sounds cannot be memorized and accurately reproduced by ear by lay-people. For this reason they simply don’t support idiomatic expression, which makes musical compositions created in these techniques inexpressive and culturally non-preservable. And even though many of these techniques have now been abandoned, it has been difficult for composers to find their way back to creating music that is both accessible and of high quality – precisely because of their deliberate avoidance and lack of mastery of conventional expressive means.</StatementPar>
          <StatementPar>Although the popular music branch does not violate the biological principles of music as much, it does, however, display a growing tendency towards abstraction: instead of communicating emotions through musical idioms, popular music of today resorts to the “make-belief” mode of personal consumption. For instance, fans of Madonna fantasize that the melody of her love song “Cherish” expresses unconditional love because of its lyrics, despite its melody consisting of a rather random sequence of notes, devoid of expressive motifs that could possibly be interpreted as expressing the musical emotion of love (e.g., sparse medium-size ascending and descending leaps evenly distributed in a wavy melodic motion with regular metric pace in not too fast a tempo). People are fond of making up all sorts of post-factum stories to justify their emotional impulses. So, when listeners hear a song clip from a video, they respond to something about its sound and to the look of the singer (but not to its musical structures) and they ascribe false positive attributes to the music to justify their liking of it. What they think they like about the music has nothing to do with what is going on in the structure of the music. And the music industry, having noticed this about the average listening, has been taking advantage of it in their promotional campaigns.</StatementPar>
          <img
            src={popMusicFans}
            alt="Pop music fans"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>I don’t know the complete reason for why people wish for a piece of music to express something (usually an emotional state, characteristic image, general mood or attitude) - probably, due to our evolutionary roots. The reality though is obvious in traditional music cultures and is best demonstrated by the economic analysis of public music consumption. The general trend here is that people pay to be emotionally stirred by music. In contrast, they avoid music that leaves them unmoved emotionally - and can even become angry at it. Thus, some people call background music played at public venues noise and litigate against such venues. At any rate, what is clear is that, worldwide, humans seem to have the “need” for musical emotions - there is no culture in the history of humanity without music. And the only music culture that denies musical emotions is the Western avant-garde music, starting from Stravinsky’s famous quote (from his autobiography): “I consider that music is, by its very nature, essentially powerless to express anything at all, whether a feeling, an attitude of mind, or psychological mood, a phenomenon of nature, etc… Expression has never been an inherent property of music…”</StatementPar>
          <img
            src={lolaAstanova}
            alt="Lola Astanova"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>Demand for musical emotions used to be satisfied by local musical traditions. However, as a result of globalization, the Western music industry got a grip over the world's music market, but failed to satisfy the need for musical emotions due to low quality products. Instead, it is a growing trend in the popular music industry to produce inexpressive music that only <i>appears</i> to be expressive - mainly through extra-musical means. And as for the musicians of classical music today, they are marketed in a similar way.</StatementPar>
          <StatementPar>Not surprisingly, this situation has already caused the classical music tradition to severely decline. As Taruskin put it in his “Oxford History of Western Music”: “By the end of the 1960s popular music accounted for more than 70% of all record sales, leaving jazz, folk, and classical to compete for the remainder. Since then the disparity has only grown. In the 1990s, classical music and jazz each commanded a measly 3% of record sales.” In the 30 years that followed, the share of classical music dropped even further, staying at about 1%.</StatementPar>
          <img
            src={ascension}
            alt="Ascension Darryl Daniels"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_LEFT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>No major music works have recently been created that would carry on the expressive legacy of the last great 20th century composers, such as Shostakovich, Sibelius, Rodrigo, and Walton. Instead there has been a profusion of stylistically diverse but mostly mediocre compositions. The great tradition of American jazz has followed the same path to decline in social importance. And Western popular music is already seriously suffering, becoming increasingly more stereotypical and stunted in its stylistic development in the past 20 years.</StatementPar>
          <StatementPar>But what is even worse is that the very semiotic foundation of Western music has become fractured and dysfunctional. Every decade, music experience becomes more and more isolated. And live concerts do not compensate for it either. Even the most populous rock concert arenas only look as if the music that is being performed is unifying the audience in some collective experience. In reality, it is the non-musical components of the show that trigger an emotional response and generate an appearance of a collective reaction to the performed music. Modern day’s audience is generally less competent in music idioms than audiences 50 years ago and still less so than audiences 100 years ago. The omnipresence of background listening alone is enough to make a listener get used to ignoring music structures. Music must contain enough structure to support the collective experience of people, and this musical structure must be accessible to listeners via their intuitive implicit or rational explicit knowledge of the related idioms.</StatementPar>
          <img
            src={composer}
            alt="Composer"
            css={{
              ...IMG_STYLES.INLINE,
              ...IMG_STYLES.INLINE_RIGHT,
              ...IMG_STYLES.INLINE_LANDSCAPE,
            }}
          />
          <StatementPar>So, as a composer, musicologist, and writer, I see my responsibility in:</StatementPar>
          <StyledList>
            <StyledListItem>Building a methodology for teaching music that would be true to its collective and emotional roots.</StyledListItem>
            <StyledListItem>Investigating biologically grounded features in music.</StyledListItem>
            <StyledListItem>Exposing the general public to the idea that music can affect our lives, which hopefully would promote the kinds of music that are expressive and communicative.</StyledListItem>
            <StyledListItem>Composing original music that revives the traditional means of tonal organization.</StyledListItem>
          </StyledList>
          <StatementPar>I hope that these measures will inspire and motivate creators of new music to find and restore ways to connect with the wider audiences.</StatementPar>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Statement;
