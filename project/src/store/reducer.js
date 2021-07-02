import {ActionType} from './action';
import {films} from '../mocks/films';
import {BASE_GENRE} from '../const';

const initialState = {
  genre: BASE_GENRE,
  films: films,
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
    default:
      return state;
  }
};


export {reducer};
