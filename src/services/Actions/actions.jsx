import { ADD_TO_CART, REMOVE_TO_CART,FILTER_BY_CATEGORY  } from "../constants";

export const AddtoCart = (data) => {
  console.log("Action: Add to Cart", data);
  return {
    type: ADD_TO_CART,
    data, // Ensure data is passed correctly
  };
};

export const RemovetoCart = (data) => {
  console.log("Action: Remove from Cart", data);
  return {
    type: REMOVE_TO_CART,
    data, // Pass the item to remove
  };
};

export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  category,
});