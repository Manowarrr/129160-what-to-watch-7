import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre, loadFilms, updateFilms, loadFavoriteFilms} from '../action';
import { adaptFilm } from '../adapter';
import {BASE_GENRE} from '../../const';

const initialState = {
  genre: BASE_GENRE,
  films: [],
  favoriteFilms: [],
  isDataLoaded: false,
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.films = action.payload;
    })
    .addCase(updateFilms, (state, action) => {
      const film = adaptFilm(action.payload);
      const index = state.films.findIndex((item) => item.id === film.id);

      state.films = [
        ...state.films.slice(0, index),
        film,
        ...state.films.slice(index + 1),
      ];
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.map((film) => adaptFilm(film));
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      console.dir(action.payload);
      state.favoriteFilms = action.payload.map((film) => adaptFilm(film));
    });
});

export {mainData};
