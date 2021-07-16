import React, {useEffect} from 'react';
import Logo from '../logo/logo';
import FilmCardListSimilar from '../film-card-list-similar/film-card-list-similar';
import FilmPageTabs from '../film-page-tabs/film-page-tabs';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import UserBlock from '../user-block/user-block';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';
import reviewProp from '../review/review.prop';
import { connect } from 'react-redux';
import {fetchFilm, fetchSimilarFilms, fetchReviews} from '../../store/api-actions';
import { ActionCreator } from '../../store/action';
import {AuthorizationStatus} from '../../const';

function FilmPage({film, isFilmDataLoaded, similarFilms, reviews, loadFilm, loadReviews, loadSimilarFilms, clearData, authorizationStatus}) {
  const {id} = useParams();
  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;

  useEffect(() => {
    loadFilm(id);
    loadSimilarFilms(id);
    loadReviews(id);

    return () => {
      clearData();
    };
  }, [id]);

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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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

FilmPage.propTypes = {
  film: filmCardProp,
  similarFilms: PropTypes.arrayOf(filmCardProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  loadFilm: PropTypes.func.isRequired,
  loadSimilarFilms: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
  isFilmDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.film,
  similarFilms: state.similarFilms,
  reviews: state.reviews,
  isFilmDataLoaded: state.isFilmDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(fetchFilm(id));
  },
  loadSimilarFilms(id) {
    dispatch(fetchSimilarFilms(id));
  },
  loadReviews(id) {
    dispatch(fetchReviews(id));
  },
  clearData() {
    dispatch(ActionCreator.clearFilm());
  },
});

export { FilmPage };
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
