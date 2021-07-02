import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';
import FilmCard from '../film-card/film-card';
import { connect } from 'react-redux';
import { filterFilmsByGenre } from '../../util';

function FilmCardList ({films}) {
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
        films.map(
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

FilmCardList.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

const mapStateToProps = (state) => ({
  films: filterFilmsByGenre(state.films, state.genre),
});

export { FilmCardList };
export default connect(mapStateToProps, null)(FilmCardList);
