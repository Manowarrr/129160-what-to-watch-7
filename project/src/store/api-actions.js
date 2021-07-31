import {requireAuthorization, redirectToRoute, logout as closeSession, loadFilm, loadFilms, loadSimilarFilms, loadReviews, updateFilms, loadFavoriteFilms, loadPromoFilm, updateFilm} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const addComment = ({rating , comment, id}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
    .catch(() => dispatch(redirectToRoute(`${AppRoute.NOT_FOUND}/${id}`)))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then(({data}) => dispatch(loadSimilarFilms(data)))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data})=> dispatch(loadFavoriteFilms(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

export const updateFilmStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.UPDATE_FILM}/${id}/${status}`)
    .then(({data}) => {
      dispatch(updateFilm(data));
      dispatch(updateFilms(data));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data})=> dispatch(loadPromoFilm(data)))
);
