import React, {useRef, useState} from 'react';
import { useHistory } from 'react-router';
import {useSelector} from 'react-redux';
import {getFilms} from '../../store/main-data/selectors';
import {useParams} from 'react-router-dom';
import LoadingScreen from '../loading-screen/loading-screen';

const MINUTE_COUNT_IN_HOUR = 60;
const SECOND_COUNT_IN_HOUR = 3600;

function Player() {
  const { id } = useParams();
  const films = useSelector(getFilms);
  const [ film ] = films.filter((element) => element.id === Number.parseInt(id, 10));

  const [isPlayerRunning, setIsPlayerRunning] = useState(false);
  const [currentTimePlaying, setCurrentTimePlaying] = useState(0);
  const [isLoadingScreen, setIsLoadingScreen] = useState(false);

  const videoElement = useRef();
  const history = useHistory();
  const fulltime = film.runTime * MINUTE_COUNT_IN_HOUR;

  const handlePlayVideoClick = () => {
    if (videoElement.current.paused || videoElement.current.ended) {
      videoElement.current.play();
      setIsPlayerRunning(true);
      setIsLoadingScreen(true);
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
    runtime = runtime / MINUTE_COUNT_IN_HOUR;
    let hours   = Math.floor(runtime / MINUTE_COUNT_IN_HOUR);
    let minutes = Math.floor((runtime - hours * MINUTE_COUNT_IN_HOUR));
    let seconds = Math.floor(runtime * MINUTE_COUNT_IN_HOUR - hours * SECOND_COUNT_IN_HOUR - minutes * MINUTE_COUNT_IN_HOUR);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    hours = hours < 10 ? `0${hours}` : hours;

    return hours === 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };

  return (
    <div className="player">
      {isLoadingScreen && <LoadingScreen></LoadingScreen>}
      <video
        ref={videoElement}
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        onTimeUpdate={handleCurrentTimePlaying}
        onPlaying={() => setIsLoadingScreen(false)}
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
              value={`${currentTimePlaying/fulltime*100}%`}
              max="100"
            >
            </progress>
            <div className="player__toggler" style={{ left: `${currentTimePlaying/fulltime*100}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatRuntime(fulltime - currentTimePlaying)}</div>
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
