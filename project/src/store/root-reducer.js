import {combineReducers} from 'redux';
import {user} from './user/user';
import {filmData} from './film-data/film-data';
import {mainData} from './main-data/main-data';

export const NameSpace = {
  DATA: 'DATA',
  FILM: 'FILM',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: mainData,
  [NameSpace.FILM]: filmData,
  [NameSpace.USER]: user,
});
