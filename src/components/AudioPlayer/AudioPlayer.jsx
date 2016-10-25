import React, { PropTypes } from 'react';
import ReactAudioPlayer from 'react-responsive-audio-player';
// Import default CSS
import 'react-responsive-audio-player/dist/audioplayer.css';
// Override default CSS with my own styles
import './AudioPlayer.css';

const propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    displayText: PropTypes.string,
  })),
  mediaUrl: PropTypes.string,
  mediaDisplayName: PropTypes.string,
};
/* This is my own version of the Audio Player that accepts an interface of
 * a single audio file to play, as well as a playlist
 */
const AudioPlayer = ({ playlist, mediaUrl, mediaDisplayName, ...rest}) => {
  const audioPlaylist = (playlist)
    ? playlist
    : [{ url: mediaUrl, displayText: mediaDisplayName }]
  return <ReactAudioPlayer playlist={audioPlaylist} {...rest} />
};

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
