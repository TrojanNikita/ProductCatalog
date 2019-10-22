import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {getAllProducts} from '../actions';

import './products.css';

class Products extends Component {

  render() {

    const{productList}=this.props;

    return (
        <ul className="prodect-list list-group">
        {productList.map(product =>
            <li
                className="list-group-item"
                key={product.productId}>
                {product.productName}
            </li>
        )}
        </ul>
    );
  }
}

function mapStateToProps(state) {
  const productList = state.products.productList;
  return {
    productList
  }
}
const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
})


export default connect(mapStateToProps,mapDispatchToProps)(Products);
