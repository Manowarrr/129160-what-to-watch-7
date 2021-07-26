import React from 'react';
import {useSelector,  useDispatch} from 'react-redux';
import {changeGenre} from '../../store/action';
import {BASE_GENRE} from '../../const';
import {getFilms, getGenre} from '../../store/main-data/selectors';

function FilmFilter() {
  const dispatch = useDispatch();
  const films = useSelector(getFilms);
  const genre = useSelector(getGenre);
  const genres = [...new Set([BASE_GENRE, ...films.map((film) => film.genre)])];

  const handleFilterClick = (filter) => dispatch(changeGenre(filter));

  return (
    <ul className="catalog__genres-list">
      {
        genres.slice(0, 9).map(
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

export default FilmFilter;
