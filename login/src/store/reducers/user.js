const initialState = {};

function user(state = initialState,action) {
    switch(action.type) {
        case 'LOG_IN':
            return action.data;
        case 'LOAD_USER':
            return action.data;
        case 'CLEAR_USER':
            return initialState;
        default:
            return state;
    }
};

 export default user;