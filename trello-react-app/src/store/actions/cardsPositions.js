export const GET_CARDS_POSITIONS = 'GET_CARDS_POSITIONS';
export const UPDATE_CARDS_POSITIONS = 'UPDATE_CARDS_POSITIONS';

export const getCardsPositions = () => dispatch => {
  fetch('http://localhost:3004/positions')
    .then(responce => responce.json())
    .then(product => dispatch({ type: GET_CARDS_POSITIONS, data: product }));
}

export const updateArray = (
  array,
  sourse,
  destination,
  sourceListId,
  destinationListId
) => async (dispatch) => {
  console.log(array,sourse,destination,sourceListId,destinationListId);
  if (sourceListId === destinationListId) {
    const [removed] = array.splice(sourse, 1);
    array.splice(destination, 0, removed);
    console.log(array);
    const value = {
      "listId": sourceListId,
      "positionsArray": array,
    }
    fetch(`http://localhost:3004/positions/${sourceListId}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(value)
    })
    .then(response => response.json())
    .then(data => dispatch({type:UPDATE_CARDS_POSITIONS, data:data}))
  }
}