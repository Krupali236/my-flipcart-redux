import { connect } from "react-redux";
import { AddtoCart, RemovetoCart ,filterByCategory } from "../services/Actions/actions";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  filteredProducts: state.CardItems.filteredProducts, // ✅ Get filtered products from Redux
  // data: state.CardItems,
});

const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  filterByCategoryHandler: (category) => dispatch(filterByCategory(category)), // ✅ Dispatch category filter action
});
// const mapDispatchToProps = (dispatch) => ({
//   AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
//   RemovetoCartHandler: (data) => dispatch(RemovetoCart(data)),
// });
export default connect(mapStateToProps, mapDispatchToProps)(Home);
