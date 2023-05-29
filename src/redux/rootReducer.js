import { combineReducers } from "redux";
import { cartData } from "./reducers";

import {productData} from './productReducer';

export default combineReducers({
  cartData,
  productData
});
