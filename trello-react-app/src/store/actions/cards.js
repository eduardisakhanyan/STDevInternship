export const GET_CARDS = 'GET_CARDS';
export const UPDATE_CARDS = 'UPDATE_CARDS';

export const getCards = () => dispatch => {
  fetch('http://localhost:3004/cards')
    .then(responce => responce.json())
    .then(product =>  dispatch ({ type: GET_CARDS, data: product }));
}

export const addNewCard = (value) => dispatch => {
  fetch('http://localhost:3004/cards', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(value)
  })
  .then((response) => response.json())
  .then((card) => {console.log(card); return dispatch({type: UPDATE_CARDS, data: card})} );
}