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
class AudioPlayer extends React.Component {
  componentDidMount() {
    // There is a bug that results in the player timeline not being sized
    // correctly on initial page load if the player is not full screen width.
    // This appears to be related to ReflexBox. This is a short-term solution,
    // but I should determine the exact root cause and fix it.
    // Discussion: https://github.com/benwiley4000/react-responsive-audio-player/pull/13
    setTimeout(this.player.resizeListener.bind(this), 0);
  }
  render() {
    const { playlist, mediaUrl, mediaDisplayName, ...rest} = this.props;
    const audioPlaylist = (playlist)
      ? playlist
      : [{ url: mediaUrl, displayText: mediaDisplayName }]
    return (
      <ReactAudioPlayer
        ref={(c) => this.player = c}
        playlist={audioPlaylist} {...rest}
      />
    )
  }
}

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
