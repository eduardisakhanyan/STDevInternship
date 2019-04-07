export const getProducts = (products) => {
    return ({ type: "GET_PRODUCTS", data: products });
};

export const getProductsByToken = (token,page,limit) => async dispatch => {
    const data = await fetch(`http://localhost:3004/users?token=${token}`)
        .then(response => response.json());
    if(data.length === 0) {
        return dispatch({type: 'GET_PRODUCTS',data:[]});
    }
    const products = await fetch(`http://localhost:3004/products?userId=${data[0].id}&&_page=${page}=&&_limit=${limit}`)
            .then(response => response.json())
    return dispatch({ type: 'GET_PRODUCTS', data: products });
            
};

export const addProduct = (product) => {
    return ({type: "ADD_PRODUCT", data: product});
}

export const clearProducts = () => ({type:"CLEAR_PRODUCTS"});