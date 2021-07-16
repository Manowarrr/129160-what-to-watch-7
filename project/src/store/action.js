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

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadSimilarFilms: (films) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: films,
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film,
  }),
  clearFilm: () => ({
    type: ActionType.CLEAR_FILM,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
