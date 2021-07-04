import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';
import FilmCard from '../film-card/film-card';

function FilmCardListSimilar ({films}) {
  const [activeFilm, setActiveFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = (id) => setActiveFilm(id);
  const handleMouseLeave = () => setActiveFilm(null);

  useEffect(() => {
    setIsPlaying(false);
    const timer = setTimeout(() => setIsPlaying(true), 1000);
    return () => clearTimeout(timer);
  }, [activeFilm]);

  return (
    <div className="catalog__films-list">
      {
        films.slice(0, 4).map(
          (film) => (
            <FilmCard
              key={film.id}
              film={film}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              active={activeFilm===film.id && isPlaying}
            />),
        )
      }
    </div>
  );
}

FilmCardListSimilar.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default FilmCardListSimilar;
