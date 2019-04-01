import rootReducer from './reducers';
import { createStore } from 'redux';


let store = createStore(rootReducer);
export default store;
