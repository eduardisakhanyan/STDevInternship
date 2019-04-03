const initialState = [
    {}
];

function products(state = initialState,action) {
    switch(action.type){
        case 'GET_PRODUCTS':
        return action.data;
        case 'ADD_PRODUCT':
        return [
            ...state,
            action.data
        ]
        default:
        return state;
    }
}

export default products;