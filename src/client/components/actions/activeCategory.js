import * as actionTypes from '../constants/actionTypes';
import { getSomeProducts, getAllProducts, getSubcategory,offSubcategory } from '../actions';




//При щелчке на категорию:
//Она становится активной, загружаются подкатегории, список продуктов для нее
//Она становится неактивной, удаляются подкатегории, список всех продуктов
export const clickOnCategory = (ID,AID) => {

  return (dispatch) => {ы
    if (ID===AID){
        dispatch(offActive());
        dispatch(offSubcategory());
        dispatch(getAllProducts());
    }else{
        dispatch(onActive(ID));
        dispatch(getSubcategory(ID));
        dispatch(getSomeProducts(ID));
    }
  }
};



const onActive = id => ({
    type: actionTypes.ON_ACTIVE,
    payload: id
});


//Действие: сделать категорию неактивной
const offActive = () => ({
  type: actionTypes.OFF_ACTIVE
})
