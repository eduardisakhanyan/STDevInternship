import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import lists from './lists';
import cards from './cards';
import cardsPositions from './products';

const rootReducer = combineReducers({
  lists,
  cards,
  cardsPositions,
  form: formReducer,
});

export default rootReducer;