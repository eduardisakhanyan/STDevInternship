export const setProductById = (id,callback) => dispatch => {
    fetch('http://localhost:3004/products/' + id)
        .then(responce => responce.json())
        .then(product =>  dispatch ({ type: "SET_PRODUCT", data: product }))
        .then(()=>callback('/edit'));
};