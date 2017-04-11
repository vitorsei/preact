import * as cookie from 'react-cookie';
import * as types from '../actions/action-types';

const authMiddleware = function (store) {
  return function (next) {
    return function (action) {
      if (action.type === types.LOGIN_SUCCESS) {
        if (action.user) {
          cookie.save('pp-token', action.user.ppToken);
          cookie.save('pp-instance-code', action.user.instanceCode);
        }
      } else if (action.type === types.LOGOUT) {
        cookie.remove('pp-token');
        cookie.remove('pp-instance-code');
      }
      next(action);
    };
  };
};

export default authMiddleware;
