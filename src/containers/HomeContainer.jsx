import { connect } from "react-redux";
import { AddtoCart, filterByCategory,updateCartQuantity  } from "../services/Actions/actions";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  filteredProducts: state.CardItems.filteredProducts, // ✅ Get filtered products from Redux
  // data: state.CardItems,
  cart: state.CardItems.items,
});

const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  updateCartQuantityHandler: (id, quantity) => dispatch(updateCartQuantity(id, quantity)),
  filterByCategoryHandler: (category) => dispatch(filterByCategory(category)), // ✅ Dispatch category filter action
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
