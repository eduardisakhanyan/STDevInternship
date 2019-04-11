export const UPDATE_CARDS = 'UPDATE_CARDS';
export const GET_CARDS = 'GET_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const getCards = async () => {
  const cards = await fetch('http://localhost:3004/cards')
    .then(responce => responce.json())
  return cards;
}

export const addNewCard = async (value) => {
  const newCard = await fetch('http://localhost:3004/cards', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(value)
  })
  .then((response) => response.json());
  return newCard;
}

export const updateCard = (value,oldCard) => async dispatch => {
  const newValue = {
    "name": value.name,
    "description": value.description,
    "listId": oldCard.listId,
  }
  const updatedCard = fetch('http://localhost:3004/cards/' + oldCard.id, {
    method: 'PUT',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({...newValue})
  })
  .then(response => response.json())
  return dispatch({type: UPDATE_CARDS,data: updatedCard});
}