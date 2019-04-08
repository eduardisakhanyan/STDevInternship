import { GET_LISTS, UPDATE_LISTS } from '../actions/lists';

const initialState = [];

function lists(state = initialState,action) {
    switch(action.type){
        case GET_LISTS:
        return action.data;
        case UPDATE_LISTS:
        return [
          ...state,
          action.data
        ];
        default:
        return state;
    }
}

export default lists;