import * as actionTypes from '../constants/actionTypes';

const initialState = {
  productList: []
}
export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ALL_PRODUCTS_SET:
      return {...state, productList: action.payload}
    case actionTypes.SOME_PRODUCTS_SET:
      return {...state, productList: action.payload}
  }
  return state;
}
