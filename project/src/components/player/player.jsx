import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router';
import {useSelector} from 'react-redux';
import {getFilms} from '../../store/main-data/selectors';
import {useParams} from 'react-router-dom';

function Player() {
  const { id } = useParams();
  const films = useSelector(getFilms);
  const [ film ] = films.filter((element) => element.id === Number.parseInt(id, 10));
  const runTime = film.runTime * 60;

  const [isPlayerRunning, setIsPlayerRunning] = useState(false);
  const [currentTimePlaying, setCurrentTimePlaying] = useState(0);
  const videoElement = useRef(null);
  const history = useHistory();

  const handlePlayVideoClick = () => {
    if (videoElement.current.paused || videoElement.current.ended) {
      videoElement.current.play();
      setIsPlayerRunning(true);
    } else {
      videoElement.current.pause();
      setIsPlayerRunning(false);
    }
  };

  const handleFullScreenClick = () => {
    if (!document.fullscreenElement) {
      if (videoElement.current.requestFullscreen) {
        videoElement.current.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  };

  const handleCurrentTimePlaying = (e) => setCurrentTimePlaying(e.target.currentTime);

  const formatRuntime = (runtime) => {
    runtime = runtime / 60;
    const hours   = Math.floor(runtime / 60);
    let minutes = Math.floor((runtime - hours * 60));
    let seconds = Math.floor(runtime * 60 - hours * 3600 - minutes * 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="player">
      <video
        ref={videoElement}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        onProgress={handleCurrentTimePlaying}
        muted
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={`${(currentTimePlaying/film.runTime*60)*100}%`}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: `${currentTimePlaying/runTime*100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatRuntime(runTime - currentTimePlaying)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayVideoClick}
          >
            {isPlayerRunning ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </> :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}
          </button>
          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => handleFullScreenClick()}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
