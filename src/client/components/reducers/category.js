import * as actionTypes from '../constants/actionTypes';

const initialState = {
  categoryList: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CATEGORY_SET:
      return {...state, categoryList: action.payload}
  }
  return state;
}
