import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  FILTER_BY_CATEGORY,
  UPDATE_CART_QUANTITY,
} from "../constants";

export const AddtoCart = (data) => (dispatch, getState) => {
  const { CardItems } = getState(); // Get current cart state
  const existingItem = CardItems.items.find((item) => item.id === data.id);

  if (existingItem) {
    // If item exists, update quantity
    dispatch(updateCartQuantity(data.id, existingItem.quantity + 1));
  } else {
    // If item does not exist, add new item
    dispatch({
      type: ADD_TO_CART,
      data: { ...data, quantity: 1 }, // Ensure item has initial quantity
    });
  }
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

export const updateCartQuantity = (id, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { id, quantity },
  };
};
