import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import AddReview from '../add-review/add-review';
import FilmPage from '../film-page/film-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(props) {
  const {films, promo} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage films={films} promo={promo}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <AddReview />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route exact path={AppRoute.LIST}>
          <MyList />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    date: PropTypes.string,
  }),
  films: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
