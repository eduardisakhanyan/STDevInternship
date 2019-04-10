export const GET_LISTS = 'GET_LISTS';
export const UPDATE_LISTS = 'UPDATE_LISTS';

export const getLists = () => dispatch => {
  fetch('http://localhost:3004/lists')
    .then(responce => responce.json())
    .then(product => dispatch({ type: GET_LISTS, data: product }));
}

export const addNewList = (value) => dispatch => {
  fetch('http://localhost:3004/lists', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(value)
  })
  .then((response) => response.json())
  .then((value) => {console.log(value); return dispatch({type: UPDATE_LISTS, data: value})})
}