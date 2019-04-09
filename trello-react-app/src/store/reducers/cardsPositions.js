import { GET_CARDS_POSITIONS, UPDATE_CARDS_POSITIONS } from '../actions/cardsPositions';

const initialState = [];

function cardsPositions(state = initialState,action) {
    switch(action.type){
        case GET_CARDS_POSITIONS:
        return action.data;
        case UPDATE_CARDS_POSITIONS:
        console.log(state);
        const newState = state.map((item) => {
          if(item.listId === action.data.listId) {
            return action.data;
          }
          return item;
        });
        console.log(newState);
        return newState;
        default:
        return state;
    }
}

export default cardsPositions;