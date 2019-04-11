import { GET_CURRENT_CARD,DELETE_CURRENT_USER} from '../actions/currentCard';

const initialState = [];

function lists(state = initialState,action) {
    switch(action.type){
        case GET_CURRENT_CARD:
        return action.data;
        case DELETE_CURRENT_USER:
        return initialState;
        default:
        return state;
    }
}

export default lists;