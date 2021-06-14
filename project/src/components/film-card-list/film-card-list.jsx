import React, {useState} from 'react';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';
import FilmCard from '../film-card/film-card';

function FilmCardList ({films}) {
  const [activeFilm, setActiveFilm] = useState(null);

  const handleMouseEnter = (id) => setActiveFilm(id);
  const handleMouseLeave = () => setActiveFilm(null);

  return (
    <div className="catalog__films-list">
      {
        films.map(
          (film) => (
            <FilmCard
              key={film.id}
              film={film}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              active={activeFilm===film.id}
            />),
        )
      }
    </div>
  );
}

FilmCardList.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default FilmCardList;
