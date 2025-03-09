import { connect } from "react-redux";
import {
  AddtoCart,
  RemovetoCart,
  updateCartQuantity,
} from "../services/Actions/actions";
import Cart from "../components/cart";

const mapStateToProps = (state) => {
  console.log("Redux State in CartContainer:", state); // Debugging log
  console.log("Cart Items from Redux:", state.CardItems.items); // 🔍 Log the cart items
  return {
    data: state.CardItems.items, // Access `items` correctly
  };
};
const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  RemovetoCartHandler: (data) => dispatch(RemovetoCart(data)),
  updateCartQuantityHandler: (id, quantity) =>
    dispatch(updateCartQuantity(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
