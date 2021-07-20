import {NameSpace} from '../root-reducer';

export const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
export const getReviews = (state) => state[NameSpace.FILM].reviews;
export const getFilm = (state) => state[NameSpace.FILM].film;
export const getIsFilmDataLoaded = (state) => state[NameSpace.FILM].isFilmDataLoaded;
