import React from 'react';
import ReactAudioPlayer from 'react-responsive-audio-player';
// Import default CSS
import 'react-responsive-audio-player/dist/audioplayer.css';
// Override default CSS with my own styles
import './AudioPlayer.css';

const AudioPlayer = (props) => {
  return <ReactAudioPlayer {...props} />
};

export default AudioPlayer;
