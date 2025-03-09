import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  FILTER_BY_CATEGORY,
  UPDATE_CART_QUANTITY,
} from "../constants";
import { products } from "../../components/Products"; // Import products

const initialState = {
  items: [], // Cart items array
  filteredProducts: products, // Store filtered products separately
};

const CardItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer: Adding item to cart", action.data);

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.data.id
      );

      if (existingItemIndex !== -1) {
        // If item already exists, update its quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        // If item does not exist, add it
        return {
          ...state,
          items: [...state.items, action.data],
        };
      }

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

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default CardItems;
