export const AppRoute = {
  LOGIN: '/login',
  FILM: '/films/:id',
  LIST: '/mylist',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  ROOT: '/',
  NOT_FOUND: '/not-found',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  UPDATE_FILM: '/favorite',
  FAVORITE_FILMS: '/favorite',
  PROMO_FILM: '/promo',
};

export const BASE_GENRE = 'All genres';

export const Rating = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};
