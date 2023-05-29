import {
  ADD_TO_CART,
  CART_EMPTY,
  REMOVE_FROM_CART,
  PRODUCT_LIST,
  SET_PRODUCT_LIST,
} from "./constant";

export const productList = () => {
  return { type: PRODUCT_LIST };
};
