import { connect } from "react-redux";
import { AddtoCart, filterByCategory } from "../services/Actions/actions";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  filteredProducts: state.CardItems.filteredProducts, // ✅ Get filtered products from Redux
  // data: state.CardItems,
});

const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  filterByCategoryHandler: (category) => dispatch(filterByCategory(category)), // ✅ Dispatch category filter action
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
