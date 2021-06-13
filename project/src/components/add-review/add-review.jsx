import React from 'react';
import Logo from '../logo/logo';
import AddReviewForm from '../add-review-form/add-review-form';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import filmCardProp from '../film-card/film-card.prop';

function AddReview({films}) {
  const { id } = useParams();
  const [ film ] = films.filter((element) => element.id === Number.parseInt(id, 10));

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
      <AddReviewForm></AddReviewForm>
    </section>
  );
}

AddReview.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default AddReview;
