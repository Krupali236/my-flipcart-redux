import { ADD_TO_CART, REMOVE_TO_CART, FILTER_TO_CART } from "../constants";

const initialState = {
  items: [], // Cart items array
};

const CardItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer: Adding item to cart", action.data);
      return {
        ...state,
        items: [...state.items, action.data], // Append new item
      };

    case REMOVE_TO_CART:
      console.log("Reducer: Removing item", action.data);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.data.id), // Remove specific item
      };

    case FILTER_TO_CART:
      console.log("Reducer: Filtering cart");
      return {
        ...state,
        items: [], // Clear cart for filter action (if needed)
      };

    default:
      return state;
  }
};

export default CardItems;



// import { ADD_TO_CART, REMOVE_TO_CART,FILTER_TO_CART } from "../constants";

// const InitialState = {
//   cardData: [],
// };
// const CardItems = (state = InitialState, action) => {
//   // console.log("state",state)
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, { cardData: action.data }]
//     case REMOVE_TO_CART:
//       state.pop();
//       return [...state]
//       case FILTER_TO_CART:
//         state.map((items)=>{
//           console.log(items,"items")
//         })
//         return [...state]
//     default:
//       return state
//   }
// };
// export default CardItems;

