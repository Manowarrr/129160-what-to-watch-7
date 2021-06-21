import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({poster, video}) {
  const videoRef = useRef();

  useEffect(() => {
    let timerId = setTimeout(() => videoRef.current.play(), 1000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <video
      width='280'
      height='175'
      src={video}
      poster={poster}
      muted
      ref={videoRef}
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
