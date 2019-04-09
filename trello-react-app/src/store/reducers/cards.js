import { GET_CARDS, UPDATE_CARDS } from '../actions/cards';

const initialState = [];

function cards(state = initialState,action) {
    switch(action.type){
        case GET_CARDS:
        return action.data;
        case UPDATE_CARDS:
        return [
          ...state,
          action.data,
        ]
        default:
        return state;
    }
}

export default cards;