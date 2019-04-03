import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import user from './user';
import products from './products';


const rootReducer = combineReducers({
  user,
  products,
  form: formReducer,
});

export default rootReducer;