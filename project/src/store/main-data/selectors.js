import {NameSpace} from '../root-reducer';

export const getGenre = (state) => state[NameSpace.DATA].genre;
export const getFilms = (state) => state[NameSpace.DATA].films;
export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;

