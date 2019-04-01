const initialState = {
    "email": "",
    "username": "",
    "password": "",
    "loggedId": "false",
}

function user(state = initialState,action) {
    switch(action.type) {
        case 'LOG_IN':
            return action.payload;
        default:
            return state;
    }
};

 export default user;