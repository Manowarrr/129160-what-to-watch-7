import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FilmCardList from '../film-card-list/film-card-list';
import FilmFilter from '../film-filter/film-filter';
import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { BASE_GENRE, AuthorizationStatus } from '../../const';

function MainPage({changeGenre, authorizationStatus}) {
  useEffect(() => changeGenre(BASE_GENRE));

  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className={`page-header ${isSignedIn ? 'film-card__head' : ''}`}>
          <Logo light></Logo>
          <UserBlock isSignedIn={isSignedIn}></UserBlock>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
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

MainPage.propTypes = {
  changeGenre: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export { MainPage };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
