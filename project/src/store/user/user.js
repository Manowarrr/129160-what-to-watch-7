import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, logout, showError} from '../action';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  error: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(showError, (state, action) => {
      state.error = action.payload;
    });
});

export {user};
