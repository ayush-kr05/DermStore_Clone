import { COUNT_CART, GET_CARTDATA } from "./actionType";

export const fetchCartData = (data) => {
  return {
    type: GET_CARTDATA,
    payload: data,
  };
};

export const GetCartCount = (data) => {
  return {
    type: COUNT_CART,
    payload: data,
  };
};
