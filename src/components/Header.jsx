import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.svg";

const Header = (props) => {
const navigate = useNavigate();
  // console.log(props.data, "Home props");
  const  handleCart = ()=>{
    console.log("Navigation")
    navigate(`/cart`);
  }
  return (
    <>
      <div className="container:full">
        <div className="nav bg-slate-700 h-24 w-full flex items-center justify-center">
          <ul className="flex text-white justify-evenly text-xl">
            <li className="mx-36">Home</li>
            <li className="mx-36">About</li>
            <li className="mx-36">Contact</li>
            <li className="cursor-pointer" onClick={handleCart}>
              <span className="absolute top-3 ms-6 px-2 text-slate-700 bg-white rounded-full text-lg">
                {props.data.length}
              </span>
              <img src={cart} alt="cart" height="40px" width="40px" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
