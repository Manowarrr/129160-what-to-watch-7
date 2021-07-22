import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useSelector} from 'react-redux';
import MainPage from '../main-page/main-page';
import AddReview from '../add-review/add-review';
import FilmPage from '../film-page/film-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import LoadingScreen from '../loading-screen/loading-screen';
import SignIn from '../sign-in/sign-in';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {getIsDataLoaded} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {isCheckedAuth} from '../../util';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App() {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route
          exact
          path={AppRoute.FILM}
          render={(props) => <FilmPage {...props}/>}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={(props) => <AddReview {...props}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.LIST}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
