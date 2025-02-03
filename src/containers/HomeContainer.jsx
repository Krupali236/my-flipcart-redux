import { connect } from "react-redux";
import { AddtoCart, RemovetoCart } from "../services/Actions/actions";

import Home from "../components/Home";

const mapStateToProps = (state) => ({
  data: state.CardItems,
});
const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  RemovetoCartHandler: (data) => dispatch(RemovetoCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
