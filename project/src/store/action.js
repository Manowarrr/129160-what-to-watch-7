import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS_BY_GENRE: 'GET_FILMS_BY_GENRE',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  LOAD_FILM: 'data/loadFilm',
  UPDATE_FILM: 'data/updateFilm',
  CLEAR_FILM: 'data/clearFilm',
  LOAD_REVIEWS: 'data/loadReviews',
  UPDATE_FILMS: 'data/updateFilms',
  SHOW_ERROR: 'user/showError',
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));

export const getFilmsByGenre = createAction(ActionType.GET_FILMS_BY_GENRE);

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const updateFilms = createAction(ActionType.UPDATE_FILMS, (film) => ({
  payload: film,
}));

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => ({
  payload: films,
}));

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => ({
  payload: film,
}));

export const updateFilm = createAction(ActionType.UPDATE_FILM, (film) => ({
  payload: film,
}));

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => ({
  payload: film,
}));

export const clearFilm = createAction(ActionType.CLEAR_FILM);

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));


