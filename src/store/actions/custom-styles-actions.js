import * as types from './action-types';
import ahApi from '../api/ah-api';

export function getCustomStyles() {
  return async function (dispatch) {
    const customStyles = await ahApi.getCustomStyles();

    dispatch(loadCustomStylesSuccess(customStyles));
  };
}

export function loadCustomStylesSuccess(customStyles) {
  return { type: types.LOAD_CSS_STYLES_SUCCESS, customStyles };
}
