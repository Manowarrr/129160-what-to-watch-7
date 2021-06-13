import React from 'react';
import Logo from '../logo/logo';
import FilmCardList from '../film-card-list/film-card-list';
import PropTypes from 'prop-types';
import filmCardProp from '../film-card/film-card.prop';

function MyList({films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light></Logo>

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmCardList films={films}></FilmCardList>
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

MyList.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default MyList;
