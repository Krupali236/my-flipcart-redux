import { connect } from "react-redux";
// import { AddtoCart } from "../services/Actions/actions";
import Header from "../components/Header";

const mapStateToProps = state =>({
data:state.CardItems
})
const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;
