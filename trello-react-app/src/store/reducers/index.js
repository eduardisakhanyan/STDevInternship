import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import lists from './lists';
import cards from './cards';

const rootReducer = combineReducers({
  lists,
  cards,
  form: formReducer,
});

export default rootReducer;