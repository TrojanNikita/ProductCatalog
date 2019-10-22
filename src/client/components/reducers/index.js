import { combineReducers } from 'redux';

import category from './category';
import subcategory from './subcategory';
import user from './user';
import products from './products';
import active from './activeCategory';

export default combineReducers({
  category,
  subcategory,
  products,
  active,
  user
});
