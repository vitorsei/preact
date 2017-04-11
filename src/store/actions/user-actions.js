import * as types from './action-types';
import authApi from '../api/auth-api';
import ahApi from '../api/ah-api';

export function loadProfile(){
  return async function (dispatch) {
    const profile = await authApi.getProfile();
    const balance = await ahApi.getBalance();
    const user = { ...profile, balance: balance.balance };
    dispatch(loadProfileSuccess(user));
  };
}

export function loadProfileSuccess(user){
  return { type: types.LOAD_USER_PROFILE_SUCCESS, user };
}
