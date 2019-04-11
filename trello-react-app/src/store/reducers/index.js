import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import lists from './lists';
import cards from './cards';
import cardsPositions from './products';
import listOrder from './listOrder';
import currentCard from './currentCard';

const rootReducer = combineReducers({
  lists,
  cards,
  cardsPositions,
  listOrder,
  currentCard,
  form: formReducer,
});

export default rootReducer;