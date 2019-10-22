import * as actionTypes from '../constants/actionTypes';


export const getSubcategory = (categoryId) => {

  return (dispatch) => {
    console.log('dispatch вызывается');
    return  fetch(`/api/category/${categoryId}`)
         .then(res => res.json())
         .then(subcategoryList=>
            dispatch(setSubcategory(subcategoryList))
      )
  }
};

export const setSubcategory = (subcategory) => ({
    type: actionTypes.SUBCATEGORY_SET,
    payload: subcategory
});

export const offSubcategory=()=>({
  type:actionTypes.SUBCATEGORY_DEL
});
