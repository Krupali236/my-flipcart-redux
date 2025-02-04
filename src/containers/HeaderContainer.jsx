import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => ({
  data: state.CardItems.items, // Ensure it's accessing the correct state
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
