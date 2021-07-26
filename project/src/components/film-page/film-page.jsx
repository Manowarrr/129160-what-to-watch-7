import React, {useEffect} from 'react';
import {useSelector,  useDispatch} from 'react-redux';
import Logo from '../logo/logo';
import MyListBtn from '../my-list-btn/my-list-btn';
import FilmCardListSimilar from '../film-card-list-similar/film-card-list-similar';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import LoadingScreen from '../loading-screen/loading-screen';
//import NotFoundScreen from '../not-found-screen/not-found-screen';
import UserBlock from '../user-block/user-block';
import {Link, useParams} from 'react-router-dom';
import {fetchFilm, fetchSimilarFilms, fetchReviews} from '../../store/api-actions';
import {getFilm, getIsFilmDataLoaded, getSimilarFilms, getReviews} from '../../store/film-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {clearFilm} from '../../store/action';
import {AuthorizationStatus} from '../../const';

function FilmPage() {
  const {id} = useParams();
  const dispatch = useDispatch();

  const isSignedIn = useSelector(getAuthorizationStatus) === AuthorizationStatus.AUTH;

  useEffect(() => {
    dispatch(fetchFilm(id));
    dispatch(fetchSimilarFilms(id));
    dispatch(fetchReviews(id));

    return () => {
      dispatch(clearFilm());
    };
  }, [id]);

  const film = useSelector(getFilm);
  const isFilmDataLoaded = useSelector(getIsFilmDataLoaded);
  const similarFilms = useSelector(getSimilarFilms);
  const reviews = useSelector(getReviews);

  if (!isFilmDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo light></Logo>

            <UserBlock isSignedIn={isSignedIn}></UserBlock>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn film-card__button" to={`/player/${id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListBtn film={film}></MyListBtn>
                {isSignedIn && <Link className="btn film-card__button" to={`${id}/review`}>Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <FilmPageTabs film={film} reviews={reviews}></FilmPageTabs>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCardListSimilar films={similarFilms}></FilmCardListSimilar>
        </section>

        <footer className="page-footer">
          <Logo light={false}></Logo>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default FilmPage;
