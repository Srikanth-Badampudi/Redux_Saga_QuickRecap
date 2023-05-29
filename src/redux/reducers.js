import { ADD_TO_CART, REMOVE_FROM_CART, CART_EMPTY } from "./constant";

export const cartData = (data = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.warn("Add_To_Cart Reducer Called", action);
  //     return action.data;
  //   } else {
  //     console.warn("No Reducer Matched");
  //     return "No Reducer Matched";
  //   }

  //Switch Case to Avoid Multiple If Else

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("Add_To_Cart Reducer Called", action);
      const ItemsLength = [action.data, ...data];
      return ItemsLength;
    case REMOVE_FROM_CART:
      console.warn("Remove_From_Cart Called", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingItems = data.filter((Item) => Item.id !== action.data);
      return [...remainingItems];
    case CART_EMPTY:
      console.warn("Cart Empty");
      data = [];
      return [...data];
    default:
      console.warn("No Reducer Matched");
      return data;
  }
};
