import {createReducer} from '@reduxjs/toolkit';
import {loadSimilarFilms, loadFilm, clearFilm, loadReviews} from '../action';
import { adaptFilm } from '../adapter';

const initialState = {
  similarFilms: [],
  reviews: [],
  film: null,
  isFilmDataLoaded: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.map((film) => adaptFilm(film));
    })
    .addCase(loadFilm, (state, action) => {
      state.film = adaptFilm(action.payload);
      state.isFilmDataLoaded = true;
    })
    .addCase(clearFilm, (state) => {
      state.film = null;
      state.isFilmDataLoaded = false;
      state.similarFilms = [];
      state.reviews = [];
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {filmData};
