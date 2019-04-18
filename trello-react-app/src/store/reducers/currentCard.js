import { GET_CURRENT_CARD,DELETE_CURRENT_CARD} from '../actions/currentCard';
import { UPDATE_CURRENT_CARD } from '../actions/cards';

const initialState = [];

function lists(state = initialState,action) {
    switch(action.type){
        case GET_CURRENT_CARD:
        case UPDATE_CURRENT_CARD:
        return action.data;
        case DELETE_CURRENT_CARD:
        return initialState;
        default:
        return state;
    }
}

export default lists;