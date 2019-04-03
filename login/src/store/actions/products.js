export const getProducts = (products) => {
    return ({ type: "GET_PRODUCTS", data: products });
};

export const getProductsByToken = (token) => dispatch => {
    fetch(`http://localhost:3004/users?token=${token}`)
        .then(response => response.json())
        .then(user => fetch(`http://localhost:3004/products?userId=${user[0].id}`)
            .then(response => response.json())
            .then(products => { 
                return dispatch({ type: 'GET_PRODUCTS', data: products });
            })

        );
};

export const addProduct = (product) => {
    return ({type: "ADD_PRODUCT", data: product});
}