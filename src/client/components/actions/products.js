import * as actionTypes from '../constants/actionTypes';


export const getAllProducts = () => {

  return (dispatch) => {
    console.log('dispatch вызывается');
    return  fetch(`/api/products`)
         .then(res => res.json())
         .then(products=>
            dispatch(setProducts(products,actionTypes.ALL_PRODUCTS_SET))
      )
  }
};

export const getSomeProducts = (categoryId) => {

  return (dispatch) => {
    console.log('dispatch вызывается');
    return  fetch(`/api/products/${categoryId}`)
         .then(res => res.json())
         .then(products=>
            dispatch(setProducts(products,actionTypes.SOME_PRODUCTS_SET))
      )
  }
};


const setProducts = (products,type) => ({
    type: type,
    payload: products
});
