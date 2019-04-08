import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
