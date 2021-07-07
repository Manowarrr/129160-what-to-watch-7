import {AuthorizationStatus} from './const';

export const filterFilmsByGenre = (filmsss, genre) => filmsss.filter((film) => (film.genre === genre || genre === 'All genres'));

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

