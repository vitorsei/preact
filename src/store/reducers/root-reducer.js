import { combineReducers } from 'redux';
import auth from './auth-reducer';
import campaign from './campaign-reducer';
import instances from './instance-reducer';
import user from './user-reducer';
import customStyles from './custom-styles-reducer';

const rootReducer = combineReducers({
  auth,
  user,
  campaign,
  instances,
  customStyles
});

export default rootReducer;
