import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.REDIRECT:
      return { ...state, redirectTo: null };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        redirectTo: action.error ? null : '/'
      };

    case types.LOGOUT:
      return {
        ...state,
        redirectTo: '/login'
      };

    default:
      return state;
  }
}
