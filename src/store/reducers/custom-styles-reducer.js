import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function customStylesReducer(state = initialState.customStyles,
                                            action) {
  switch (action.type) {
    case types.LOAD_CSS_STYLES_SUCCESS:
      return action.customStyles;

    default:
      return state;
  }
}
