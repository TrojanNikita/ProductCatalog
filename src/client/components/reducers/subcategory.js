import * as actionTypes from '../constants/actionTypes';

const initialState = {
  subcategoryList: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUBCATEGORY_SET:
      return {...state, subcategoryList: action.payload}
    case actionTypes.SUBCATEGORY_DEL:
      return {...state, subcategoryList: []}
  }
  return state;
}
