import {ActionType} from './action';
import {BASE_GENRE, AuthorizationStatus } from '../const';
import { adaptFilm } from './adapter.js';

const initialState = {
  genre: BASE_GENRE,
  films: [],
  similarFilms: [],
  reviews: [],
  film: null,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isFilmDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: state.films,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload.map((film) => adaptFilm(film)),
        isDataLoaded: true,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload.map((film) => adaptFilm(film)),
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: adaptFilm(action.payload),
        isFilmDataLoaded: true,
      };
    case ActionType.CLEAR_FILM:
      return {
        ...state,
        film: null,
        isFilmDataLoaded: false,
        similarFilms: [],
        reviews: [],
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};


export {reducer};
