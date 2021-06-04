import React from 'react';
import PropTypes from 'prop-types';

function FilmCard(props) {
  const {image, text} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={text} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{text}</a>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FilmCard;
