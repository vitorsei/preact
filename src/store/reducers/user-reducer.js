import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.LOAD_USER_PROFILE_SUCCESS:
      return action.user;

    default:
      return state;
  }
}
