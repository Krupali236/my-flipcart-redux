import { connect } from "react-redux";
import { AddtoCart, RemovetoCart } from "../services/Actions/actions";
import Cart from "../components/cart";

const mapStateToProps = (state) => ({
  data: state.CardItems.items || [], // Ensure correct Redux state mapping
});

const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  RemovetoCartHandler: (data) => dispatch(RemovetoCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// import { connect } from "react-redux";
// import { AddtoCart, filterCart, RemovetoCart } from "../services/Actions/actions";
// import Cart from "../components/cart";

// const mapStateToProps = (state) => ({
//   data: state.CardItems || [], // Ensure it's always an array
// });

// // const mapStateToProps = (state) => ({
// //   data: state.CardItems.items, // Now fetching the correct cart items
// // });
// // const mapStateToProps = (state) => ({
// //   data: state.CardItems,
// // });
// const mapDispatchToProps = (dispatch) => ({
//   AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
//   RemovetoCartHandler: (data) => dispatch(RemovetoCart(data)),
//   FilterCartHandler: (data)=> dispatch(filterCart(data)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
