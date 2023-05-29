import {ADD_TO_CART,CART_EMPTY,REMOVE_FROM_CART} from './constant';

export const addToCart = (data) => {
  console.warn("AddToCart Action Called.", data);
  console.log("data", data);
  return { type: ADD_TO_CART, data };
};



export const removeFromCart = (data) =>{
    console.warn('RemoveFromCart Action Called.',data);
    console.log('data',data);
    return {type:REMOVE_FROM_CART,data}
}


export const CartEmpty = ()=>{
  console.warn('Cart Was Empty');
  return {type:CART_EMPTY}
}