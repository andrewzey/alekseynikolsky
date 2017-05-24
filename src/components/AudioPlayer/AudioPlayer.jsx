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
  componentDidMount() {
    // There is a bug that results in the player timeline not being sized
    // correctly on initial page load if the player is not full screen width.
    // This appears to be related to ReflexBox. This is a short-term solution,
    // but I should determine the exact root cause and fix it.
    // Discussion: https://github.com/benwiley4000/react-responsive-audio-player/pull/13
    setTimeout(this.player.resizeListener.bind(this), 0);
  }

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
          ref={(c) => this.player = c}
          {...{playlist, ...rest}}
        />
      </div>
    );
  }
}

AudioPlayer.propTypes = propTypes;

export default AudioPlayer;
