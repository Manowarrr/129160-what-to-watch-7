import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import FilmCardList from '../film-card-list/film-card-list';
import FilmFilter from '../film-filter/film-filter';
import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';
import MyListBtn from '../my-list-btn/my-list-btn';
import {changeGenre} from '../../store/action';
import {BASE_GENRE, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getPromoFilm} from '../../store/film-data/selectors';

function MainPage() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(getAuthorizationStatus) === AuthorizationStatus.AUTH;
  const promoFilm = useSelector(getPromoFilm);

  useEffect(() => dispatch(changeGenre(BASE_GENRE)));

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className={`page-header ${isSignedIn ? 'film-card__head' : ''}`}>
          <Logo light></Logo>
          <UserBlock isSignedIn={isSignedIn}></UserBlock>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn film-card__button" to={`/player/${promoFilm.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListBtn film={promoFilm} isPromo></MyListBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmFilter></FilmFilter>

          <FilmCardList></FilmCardList>

        </section>

        <footer className="page-footer">
          <Logo></Logo>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
