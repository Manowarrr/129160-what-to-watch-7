import React from 'react';
import filmProp from './film-card.prop';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function FilmCard({film, onHoverToggle, active}) {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onHoverToggle(film.id)}
      onMouseLeave={() => onHoverToggle(null)}
    >
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
  onHoverToggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilmCard;
