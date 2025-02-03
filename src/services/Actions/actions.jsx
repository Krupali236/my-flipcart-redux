import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export const AddtoCart = (data) => {
  console.log("action" , data)
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const RemovetoCart = () => {
  console.log("action");
  return {
    type: REMOVE_TO_CART,
    // data:data,
  };
};


