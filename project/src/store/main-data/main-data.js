import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsByGenre, loadFilms} from '../action';
import { adaptFilm } from '../adapter';
import {BASE_GENRE} from '../../const';

const initialState = {
  genre: BASE_GENRE,
  films: [],
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
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.map((film) => adaptFilm(film));
      state.isDataLoaded = true;
    });
});

export {mainData};
