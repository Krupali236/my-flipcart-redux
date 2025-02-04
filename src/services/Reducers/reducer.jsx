import { ADD_TO_CART, REMOVE_TO_CART, FILTER_BY_CATEGORY } from "../constants";
import { products } from "../../components/Products"; // Import products

const initialState = {
  items: [], // Cart items array
  filteredProducts: products, // Store filtered products separately
};

const CardItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer Before Update:", state); // Log state before update
      console.log("Reducer: Adding item to cart", action.data);
      const updatedState = {
        ...state,
        items: [...state.items, action.data], // Append new item
      };
      console.log("Reducer After Update:", updatedState); // Log updated state
      return updatedState;

    case REMOVE_TO_CART:
      console.log("Reducer: Removing item", action.data);
      const updatedItems = [...state.items];
      const index = updatedItems.findIndex(
        (item) => item.id === action.data.id
      );

      if (index !== -1) {
        updatedItems.splice(index, 1); // ✅ Remove only one item
      }

      return {
        ...state,
        items: updatedItems,
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredProducts:
          action.category === "all"
            ? products
            : products.filter((item) => item.category === action.category),
      };

    default:
      return state;
  }
};

export default CardItems;
