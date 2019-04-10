import { UPDATE_CARDS } from './cards';
import { batchActions } from 'redux-batched-actions';

export const GET_CARDS_POSITIONS = 'GET_CARDS_POSITIONS';
export const UPDATE_CARDS_POSITIONS = 'UPDATE_CARDS_POSITIONS';
export const ADD_NEW_ARRAY = 'ADD_NEW_ARRAY';

export const getCardsPositions = () => dispatch => {
  fetch('http://localhost:3004/positions')
    .then(responce => responce.json())
    .then(product => dispatch({ type: GET_CARDS_POSITIONS, data: product }));
}

export const updateArray =  (
  sourceArray,
  destinationArray,
  source,
  destination,
  sourceListId,
  destinationListId
) => async (dispatch) => {
  if (sourceListId === destinationListId) {
    const [removed] = destinationArray.splice(source, 1);
    destinationArray.splice(destination, 0, removed);
    console.log(destinationArray);
    const value = {
      "listId": sourceListId,
      "positionsArray": destinationArray,
    }
    fetch(`http://localhost:3004/positions/${sourceListId}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(value)
    })
    .then(response => response.json())
    value.id = sourceListId;
    return dispatch({type:UPDATE_CARDS_POSITIONS, data:value});
  } else {
    const idOfRemovedCard = sourceArray[source];
    const [replaced] = sourceArray.splice(source, 1);
    const sourceObjectData = {
      "listId": sourceListId,
      "positionsArray": sourceArray,
    }
    const destinationObjectData = {
      "listId": destinationListId,
      "positionsArray": destinationArray,
    }

    fetch(`http://localhost:3004/cards/${idOfRemovedCard}`, {
      method: 'PATCH',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        "listId": destinationListId,
      })
    })
    .then((response) => response.json())
    .then((card) => dispatch(batchActions([
      { type:UPDATE_CARDS, data: card},
      { type:UPDATE_CARDS_POSITIONS, 
        data: {
        ...sourceObjectData,
        id: sourceListId
        } 
      },
      { type:UPDATE_CARDS_POSITIONS, 
        data: {
        ...destinationObjectData,
        id: destinationListId
        } 
      }
    ])));

    fetch(`http://localhost:3004/positions/${sourceListId}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(sourceObjectData)
    })
    .then(response => response.json())
    .then(data => console.log(data));
    // dispatch({ type:UPDATE_CARDS_POSITIONS, 
    //   data: {
    //   ...sourceObjectData,
    //   id: sourceListId
    //   } 
    // });
    destinationArray.splice(destination,0,replaced);
    fetch(`http://localhost:3004/positions/${destinationListId}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(destinationObjectData)
    })
    .then(response => response.json())
    .then(data => console.log(data));
    // dispatch({ type:UPDATE_CARDS_POSITIONS, 
    //   data: {
    //   ...destinationObjectData,
    //   id: destinationListId
    //   } 
    // });
  }
}

export const addNewProductsList = (listId) => async dispatch => {
  const newArray = await fetch('http://localhost:3004/positions', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({
      "listId": listId,
      "positionsArray": []
    })
  })
  .then(response => response.json());
  return dispatch({type: ADD_NEW_ARRAY, data: newArray});
}

export const addCardInPositions = (id,cardId) => async dispatch => {
  const cards = await fetch(`http://localhost:3004/positions?listId=${id}`)
  .then(response => response.json());
  console.log(cards);
  const value = await fetch(`http://localhost:3004/positions/${id}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        "listId": id,
        "positionsArray": [
          ...cards[0].positionsArray,
          cardId
        ]
      })
    })
    .then(response => response.json())
    return dispatch({type:UPDATE_CARDS_POSITIONS, data:value});
}