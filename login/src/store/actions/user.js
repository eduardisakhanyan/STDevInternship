export const logIn = (val) => {
    return ({type: 'LOG_IN', data: val});
}

export const getUserByToken = (token) => dispatch => {
    fetch(`http://localhost:3004/users?token=${token}`)
          .then(response => response.json())
          .then(user => dispatch({type: 'LOG_IN',data: user[0]}));
}

export const updateUser = (total) => {
    return ({type: "UPDATE_USER",data: total});
}

export const clearUser = () => ({type: 'CLEAR_USER'});