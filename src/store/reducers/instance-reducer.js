import * as types from '../actions/action-types';
import initialState from './initial-state';
import { InstanceReducerAction } from '../actions/instance-action';

export default (state = initialState.instance, action) => {

  switch (action.type) {
    case types.LOAD_PURE_PROFILE_INSTANCES_SUCCESS:
      return action.instances;

    default:
      return state;
  }
};
