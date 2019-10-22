import * as actionTypes from '../constants/actionTypes';

const initialState = {
  activeID: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_ACTIVE:
      return {...state, activeID: action.payload}
    case actionTypes.OFF_ACTIVE:
      return {...state, activeID: {} }
    default:
      return state;
  }
}
