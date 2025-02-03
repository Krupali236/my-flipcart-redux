import { ADD_TO_CART } from "../constants";
const InitialState = {
  cardData: [],
};
const CardItems = (state=InitialState , action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...StaticRange,
        cardData: action.data,
      }
      break;
      default :
      return state
  }
};
export default CardItems