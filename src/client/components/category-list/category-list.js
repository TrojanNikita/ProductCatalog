import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {getCategory} from '../actions';


import Category from '../category';

import './category-list.css';


class CategoryList extends Component{

  render(){


     const{categoryList, activeID, onActive, offActive}=this.props;


    return (
        <ul className="category-list list-group">

        {categoryList.map(({categoryId, categoryName})=>
            <li key={categoryId}>
                <Category name={categoryName} id={categoryId}/>
            </li>
        )}

        </ul>
    );
  }

}

    const mapStateToProps=(state) =>{
      const categoryList = state.category.categoryList;
      return {
        categoryList
      }
    }
    const mapDispatchToProps = dispatch => ({
      getCategory: () => dispatch(getCategory())
    })


    export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
