import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("Set_Products API Called", action);
      return action.data;
    default:
      console.log("Default Case");
      return data;
  }
};
