import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import FilmCard from '../film-card/film-card';
import ShowmoreBtn from '../showmore-btn/showmore-btn';
import { filterFilmsByGenre } from '../../util';
import {getFilms, getGenre} from '../../store/main-data/selectors';

function FilmCardList () {
  const genre = useSelector(getGenre);
  const films = useSelector(getFilms);
  const filmsFilteredByGenre = filterFilmsByGenre(films, genre);

  const [activeFilm, setActiveFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFilmsCount, setShowFilmsCount] = useState(8);

  const handleMouseEnter = (id) => setActiveFilm(id);
  const handleMouseLeave = () => setActiveFilm(null);
  const handleShowmoreBtnClick = () => setShowFilmsCount(showFilmsCount + 8);

  useEffect(() => {
    setIsPlaying(false);
    const timer = setTimeout(() => setIsPlaying(true), 1000);
    return () => clearTimeout(timer);
  }, [activeFilm]);

  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {
          filmsFilteredByGenre.slice(0, showFilmsCount).map(
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
      {
        showFilmsCount < filmsFilteredByGenre.length &&
        <ShowmoreBtn handleShowmoreBtnClick={handleShowmoreBtnClick}></ShowmoreBtn>
      }
    </React.Fragment>
  );
}

export default FilmCardList;
