import {createReducer} from '@reduxjs/toolkit';
import {loadSimilarFilms, loadFilm, clearFilm, loadReviews, loadPromoFilm, updateFilm} from '../action';
import { adaptFilm } from '../adapter';

const initialState = {
  similarFilms: [],
  reviews: [],
  film: null,
  isFilmDataLoaded: false,
  isPromoFilmLoaded: false,
  promoFilm: null,
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
    .addCase(updateFilm, (state, action) => {
      const film = adaptFilm(action.payload);
      if(state.film === null) {
        state.promoFilm = film;
      } else if(state.promoFilm.id === action.payload.id) {
        state.film = film;
        state.promoFilm = film;
      } else {
        state.film = film;
      }
    })
    .addCase(clearFilm, (state) => {
      state.film = null;
      state.isFilmDataLoaded = false;
      state.similarFilms = [];
      state.reviews = [];
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = adaptFilm(action.payload);
      state.isPromoFilmLoaded = true;
    });
});

export {filmData};
