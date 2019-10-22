import React, { Component } from 'react';
import SubcategoryList from '../subcategory-list';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Действия, реализуемые нажатием кнопки
import {clickOnCategory} from '../actions';

import './category.css';


    //Имя и ID полученные от Category List
    //ID активной категории, хранится в store
const Category=({id, name, activeID, clickOnCategory})=>{

    //если это активная категория - подсвечиваем
      let classNames = "category list-group-item";
      if (id===activeID) {
        classNames += ' active';
      }
      console.log(activeID);
      return (
        <div
            className={classNames}
            onClick={()=>clickOnCategory(id,activeID)}>
                {name}
            { //Если ID текущей категории активно, выводим список подкатегорий
              (activeID===id)?
                 <SubcategoryList/>:
                  null
            }
        </div>
      );
  };


const mapStateToProps=(state) =>{
  const activeID = state.active.activeID;
  return {
    activeID
  }
};

const mapDispatchToProps = dispatch => ({
  clickOnCategory: (ID,AID)=>dispatch(clickOnCategory(ID,AID))
})


export default connect(mapStateToProps,mapDispatchToProps)(Category);
