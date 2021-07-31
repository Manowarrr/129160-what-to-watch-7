import React, {useRef, useState} from 'react';
import {AuthorizationStatus, AppRoute} from '../../const';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../store/action';
import {login} from '../../store/api-actions';
import Logo from '../logo/logo';
import Message from '../message/message';

const SignInErrors = {
  PASSWORD_ERROR: 'Please, enter valid password',
};

function SignIn({authorizationStatus}) {
  const dispatch = useDispatch();

  if(authorizationStatus === AuthorizationStatus.AUTH) {
    dispatch(redirectToRoute(AppRoute.ROOT));
  }

  const [passwordError, setPasswordError] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (/\s/.test(passwordRef.current.value)) {
      setPasswordError(true);
    } else {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light></Logo>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          {passwordError && <Message message={SignInErrors.PASSWORD_ERROR}/>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={loginRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo></Logo>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

SignIn.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

export default SignIn;
