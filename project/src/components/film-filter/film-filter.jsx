import React from 'react';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import {BASE_GENRE} from '../../const';

function FilmFilter({films, genre, onGenreChange}) {
  const genres = [...new Set([BASE_GENRE, ...films.map((film) => film.genre)])];

  const handleFilterClick = (filter) => onGenreChange(filter);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map(
          (item) => (
            <li
              key={item}
              className={`catalog__genres-item ${item === genre ? 'catalog__genres-item--active' : ''}`}
            >
              <a
                className="catalog__genres-link"
                onClick={() => handleFilterClick(item)}
              >{item}
              </a>
            </li>
          ),
        )
      }
    </ul>
  );
}

FilmFilter.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export { FilmFilter };
export default connect(mapStateToProps, mapDispatchToProps)(FilmFilter);
