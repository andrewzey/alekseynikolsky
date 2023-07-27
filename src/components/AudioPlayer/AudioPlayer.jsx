import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-responsive-audio-player';

// Import default CSS
import 'react-responsive-audio-player/dist/audioplayer.css';
// Override default CSS with my own styles
import './AudioPlayer.css';

const propTypes = {
  mediaUrl: PropTypes.string.isRequired,
  mediaDisplayName: PropTypes.string.isRequired,
};
/* This is my own version of the Audio Player that accepts an interface of
 * a single audio file to play, as well as a playlist
 */
class AudioPlayer extends React.Component {
  render() {
    const { mediaUrl, mediaDisplayName, ...rest} = this.props;
    const playlist = [{ url: mediaUrl, displayText: mediaDisplayName }]
    return (
      <div>
        <ReactAudioPlayer
          ref={(ref) => this.player = ref}
          {...{playlist, ...rest}}
        />
      </div>
    );
  }
}

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
