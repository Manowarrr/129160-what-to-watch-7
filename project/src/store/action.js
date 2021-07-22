import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_FILMS_BY_GENRE: 'GET_FILMS_BY_GENRE',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  LOAD_FILMS: 'data/loadFilms',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  LOAD_FILM: 'data/loadFilm',
  CLEAR_FILM: 'data/clearFilm',
  LOAD_REVIEWS: 'data/loadReviews',
};

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));

export const getFilmsByGenre = createAction(ActionType.GET_FILMS_BY_GENRE);

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => ({
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
