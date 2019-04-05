const initialState = {};

function product(state = initialState,action) {
    switch(action.type){
        case 'SET_PRODUCT':
        return action.data;
        case 'CLEAR_PRODUCT':
        return initialState;
        case 'GET_PRODUCT':
        return state;
        default:
        return state;
    }
}

export default product;