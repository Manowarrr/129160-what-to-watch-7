import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainPage from '../main-page/main-page';
import AddReview from '../add-review/add-review';
import FilmPage from '../film-page/film-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import LoadingScreen from '../loading-screen/loading-screen';
import SignIn from '../sign-in/sign-in';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import filmCardProp from '../film-card/film-card.prop';
//import reviewProp from '../review/review.prop';
import { isCheckedAuth } from '../../util';

function App(props) {
  const {films, authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage films={films}/>
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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  films: state.films,
});

export {App};
export default connect(mapStateToProps, null)(App);
