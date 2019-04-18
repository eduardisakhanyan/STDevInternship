import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import lists from './lists';
import cards from './cards';
import cardsPositions from './products';
import listOrder from './listOrder';
import currentCard from './currentCard';
import users from './users'

const rootReducer = combineReducers({
  lists,
  cards,
  cardsPositions,
  listOrder,
  currentCard,
  users,
  form: formReducer,
});

export default rootReducer;