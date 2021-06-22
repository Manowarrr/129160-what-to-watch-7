import React from 'react';
import VideoPlayer from '../video-player/video-player';
import filmProp from './film-card.prop';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function FilmCard({film, onMouseEnter, onMouseLeave, active}) {
  const handleOnMouseEnter = () => onMouseEnter(film.id);
  const handleOnMouseLeave = () => onMouseLeave(null);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="small-film-card__image">
        {active ? <VideoPlayer poster={film.posterImage} video={film.previewVideoLink}></VideoPlayer> :
          <img src={film.posterImage} alt={film.name} width='280' height='175' />}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilmCard;
