import {AuthorizationStatus, Rating} from './const';

export const filterFilmsByGenre = (filmsss, genre) => filmsss.filter((film) => (film.genre === genre || genre === 'All genres'));

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const getRating = (rating) => {
  if(rating >= 0 & rating < 3){
    return Rating.BAD;
  } else if(rating >= 3 && rating < 5){
    return Rating.NORMAL;
  } else if(rating >= 5 && rating < 8){
    return Rating.GOOD;
  } else if(rating >= 8 && rating < 10){
    return Rating.VERY_GOOD;
  }
  return Rating.AWESOME;
};
