const initialState = {
    "email": "",
    "username": "",
    "password": "",
    "loggedId": "false",
    "id": "",
}

function user(state = initialState,action) {
    switch(action.type) {
        case 'LOG_IN':
            return action.data;
        case 'LOAD_USER':
            return action.data;
        default:
            return state;
    }
};

 export default user;