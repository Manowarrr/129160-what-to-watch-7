import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmCardListFavorite from '../film-card-list-favorite/film-card-list-favorite';
import {getFavoriteFilms} from '../../store/main-data/selectors';
import {fetchFavoriteFilms} from '../../store/api-actions';

function MyList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, []);

  const films = useSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light></Logo>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock isSignedIn></UserBlock>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmCardListFavorite films={films}></FilmCardListFavorite>
      </section>

      <footer className="page-footer">
        <Logo></Logo>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
