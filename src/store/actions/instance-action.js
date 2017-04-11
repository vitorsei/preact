import * as types from './action-types';
import ahApi from '../api/ah-api';

export function onloadPureProfileInstancesSuccess(instances){
  return { type: types.LOAD_PURE_PROFILE_INSTANCES_SUCCESS, instances };
}

export function loadPureProfileInstances(){
  return async function (dispatch) {
    const instances = await ahApi.getInstances();
    dispatch(onloadPureProfileInstancesSuccess(instances));
  };
}
