import * as types from './action-types';
import authApi from '../api/auth-api';

export function onLoginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user };
}

export function onLogin(email, password) {
  return async function(dispatch) {
    const user = await authApi.login(email, password);
    dispatch(onLoginSuccess(user));
  };
}

export function onLogout() {
  return { type: types.LOGOUT };
}

export function onRedirect() {
  return { type: types.REDIRECT };
}

export function onRegister(email,
                           password,
                           instanceCode){
  return async function (dispatch) {
    const user = await authApi.register(email, password, instanceCode);
    dispatch(onLoginSuccess(user));
  };
}
