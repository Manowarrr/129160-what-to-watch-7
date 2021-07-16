import React, {useEffect} from 'react';
import Logo from '../logo/logo';
import AddReviewForm from '../add-review-form/add-review-form';
import LoadingScreen from '../loading-screen/loading-screen';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import filmCardProp from '../film-card/film-card.prop';
import { connect } from 'react-redux';
import {fetchFilm} from '../../store/api-actions';
import { ActionCreator } from '../../store/action';

function AddReview({film, isFilmDataLoaded, loadFilm, clearData}) {
  const {id} = useParams();

  useEffect(() => {
    loadFilm(id);

    return () => {
      clearData();
    };
  }, [id]);

  if (!isFilmDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo light></Logo>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}`}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm filmId={film.id}></AddReviewForm>
    </section>
  );
}

AddReview.propTypes = {
  film: filmCardProp,
  loadFilm: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
  isFilmDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.film,
  isFilmDataLoaded: state.isFilmDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(fetchFilm(id));
  },
  clearData() {
    dispatch(ActionCreator.clearFilm());
  },
});

export { AddReview };
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
