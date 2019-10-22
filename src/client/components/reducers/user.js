import * as actionTypes from '../constants/actionTypes';


const initialState = {
  currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.LOGIN_USER:
        return {...state, currentUser: action.payload}
      case actionTypes.LOGOUT_USER:
        return {...state, currentUser: {} }
      default:
        return state;
    }
}
