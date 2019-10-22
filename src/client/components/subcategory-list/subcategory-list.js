import React, { Component } from 'react';

import { connect } from 'react-redux';

import './subcategory-list.css';

class SubcategoryList extends Component {

    //данный компонент выводится при нажатии на категорию


    render() {

      const {subcategoryList}=this.props;

      return (
          <ul className="category-list list-group">
          {subcategoryList.map(subcategory =>
            <li
                className="list-group-item"
                key={subcategory.subcategoryId}>
                {subcategory.subcategoryName}
            </li>
          )}
          </ul>
      );
    }
  }

  const mapStateToProps=(state) =>{
    const subcategoryList = state.subcategory.subcategoryList;
    return {
      subcategoryList
    }
  }


  export default connect(mapStateToProps)(SubcategoryList);
