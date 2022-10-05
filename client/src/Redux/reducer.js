import { COUNT_CART, GET_CARTDATA } from "./actionType";

const initState = {
  CartData: [],
  CartCount: 0,
  TotalPay: 0,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CARTDATA:
      return { ...state, CartData: action.payload };
    case COUNT_CART:
      return { ...state, CartCount: action.payload };
    default:
      return state;
  }
};
