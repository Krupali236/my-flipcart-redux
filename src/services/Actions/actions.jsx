import { ADD_TO_CART, REMOVE_TO_CART, FILTER_TO_CART } from "../constants";

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

export const filterCart = () => {
  console.log("Action: Filter Cart");
  return {
    type: FILTER_TO_CART,
  };
};

// import { ADD_TO_CART, REMOVE_TO_CART,FILTER_TO_CART } from "../constants";
// import { useNavigate } from "react-router-dom";

// export const AddtoCart = (data) => {
//   console.log("action" , data)
//   return {
//     type: ADD_TO_CART,
//     data: data,
//   };
// };
// export const RemovetoCart = () => {
//   console.log("action");
//   return {
//     type: REMOVE_TO_CART,
//     // data:data,
//   };
// };
// export const filterCart = ()=>{
//   const navigate = useNavigate();
//   console.log("filter",data)
//   navigate(`/cart`);
//   return{
//     type: FILTER_TO_CART,
//     data : data,
//   }
// }


