import * as actionTypes from '../constants/actionTypes';


export const getCategory = () => {

  return (dispatch) => {
    console.log('dispatch вызывается');
    return  fetch(`/api/category`)
         .then(res => res.json())
         .then(categoryList=>
            dispatch(setCategory(categoryList))
      )
  }
};

export const setCategory = (category) => ({
    type: actionTypes.CATEGORY_SET,
    payload: category
});
