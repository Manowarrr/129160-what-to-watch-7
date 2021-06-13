import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import filmCardProp from '../film-card/film-card.prop';

function Player({films}) {
  const { id } = useParams();
  const [ film ] = films.filter((element) => element.id === Number.parseInt(id, 10));

  const formatRuntime = (runtime) => {
    const hours   = Math.floor(runtime / 60);
    let minutes = Math.floor((runtime - hours * 60));
    let seconds = Math.floor(runtime * 60 - hours * 3600 - minutes * 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="player">
      <video src="#" className="player__video" poster={film.posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatRuntime(film.runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
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

Player.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default Player;
