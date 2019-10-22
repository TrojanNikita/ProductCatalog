import * as actionTypes from '../constants/actionTypes';

//При входе будем подгружать продукты и категории
import { getAllProducts, getCategory } from '../actions';

export const userPostFetch = (user) => {
  console.log(user.login);
  return (dispatch) => {
    console.log('dispatch вызывается');
    return fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
                  login:user.login,
                  password: user.password
                })
    })
      .then(resp => resp.json())
      .then(data =>
       {
        if (data.message) {
          //Тут прописываем логику
        } else {
  //          localStorage.setItem("token", data.jwt);
            dispatch(loginUser(data.user));
            dispatch(getAllProducts());
            dispatch(getCategory());
        }
      })
  }
};


export const userLoginFetch = (user) => {

  console.log(user.login);
  return (dispatch) => {
    console.log('dispatch вызывается');
    return fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
                  login:user.login,
                  password: user.password
                })
    })
      .then(resp => resp.json())
      .then(data =>
       {
        if (data.message) {
          //Тут прописываем логику
        } else {
  //          localStorage.setItem("token", data.jwt);
            dispatch(loginUser(data.user));
            dispatch(getAllProducts());
            dispatch(getCategory());
        }
      })
  }
};

const loginUser = userObj => ({
    type: actionTypes.LOGIN_USER,
    payload: userObj
});

export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER
})
