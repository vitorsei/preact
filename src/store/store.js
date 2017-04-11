import { applyMiddleware, createStore, Store } from 'redux';
import authMiddleware from './middleware/auth-middleware';
import rootReducer from './reducers/root-reducer';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, authMiddleware)
);

export default store;
