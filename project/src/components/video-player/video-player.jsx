import React from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({poster, video}) {
  return (
    <video
      width='280'
      height='175'
      src={video}
      poster={poster}
      autoPlay
      muted
    >
      <p>Your user agent does not support the HTML5 Video element.</p>
    </video>
  );
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default VideoPlayer;
