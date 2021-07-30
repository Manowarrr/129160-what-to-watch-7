import React from 'react';
import filmCardProp from '../film-card/film-card.prop';
import { getRating } from '../../util';

function FilmOverviewTab({film}) {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

FilmOverviewTab.propTypes = {
  film: filmCardProp,
};

export default FilmOverviewTab;
