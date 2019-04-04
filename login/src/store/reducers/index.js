import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import user from './user';
import products from './products';
import product from './product';

const rootReducer = combineReducers({
  user,
  products,
  product,
  form: formReducer,
});

export default rootReducer;