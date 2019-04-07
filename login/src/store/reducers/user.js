const initialState = {};

function user(state = initialState,action) {
    switch(action.type) {
        case 'LOG_IN':
            return action.data;
        case 'LOAD_USER':
            return action.data;
        case 'CLEAR_USER':
            return initialState;
        case 'UPDATE_USER':
            return {
                ...state,
                totalProducts: action.data,
            }
        default:
            return state;
    }
};

 export default user;