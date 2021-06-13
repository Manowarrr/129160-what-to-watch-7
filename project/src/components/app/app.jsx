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
import filmCardProp from '../film-card/film-card.prop';

function App({films}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage films={films}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage films={films} />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <AddReview films={films}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player films={films}/>
        </Route>
        <Route exact path={AppRoute.LIST}>
          <MyList films={films}/>
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmCardProp).isRequired,
};

export default App;
