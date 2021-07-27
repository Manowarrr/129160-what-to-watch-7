import React from 'react';
import {useDispatch} from 'react-redux';
import {updateFilmStatus} from '../../store/api-actions';
import PropTypes from 'prop-types';
import filmCardProp from '../../components/film-card/film-card.prop';
//import {getPromoFilm} from '../../store/main-data/selectors';

function MyListBtn({film}) {
  const dispatch = useDispatch();

  const handleFavoriteBtnClick = () => {
    dispatch(updateFilmStatus(film.id, film.isFavorite ? 0 : 1));
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleFavoriteBtnClick}
    >
      {film.isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
    </button>
  );
}

MyListBtn.propTypes = {
  film: filmCardProp,
  isPromo: PropTypes.bool,
};

export default MyListBtn;
