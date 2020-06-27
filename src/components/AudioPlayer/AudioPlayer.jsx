import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-responsive-audio-player';
import { sendEvent, GA_CATEGORY, GA_ACTION } from '../../analytics';

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
  handleClick(event) {
    // HACKY :(
    const play_pause_button_classes = [
      'play_pause_button',
      'play_pause_inner',
      'left',
      'right',
      'triangle_1',
      'triangle_2',
    ];
    const clickedEl = event.target;
    if (play_pause_button_classes.includes(clickedEl.className)) {
      sendEvent({
        category: GA_CATEGORY.AUDIO,
        action: GA_ACTION.TOGGLE_PLAY,
        label: this.props.mediaDisplayName,
      });
    }
  }

  render() {
    const { mediaUrl, mediaDisplayName, ...rest} = this.props;
    const playlist = [{ url: mediaUrl, displayText: mediaDisplayName }]
    return (
      <div onClick={(event) => { this.handleClick(event); }}>
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
