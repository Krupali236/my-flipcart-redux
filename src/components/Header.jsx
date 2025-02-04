import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.svg";

const Header = (props) => {
  const navigate = useNavigate();

  // Function to navigate to cart page
  const handleCart = () => {
    console.log("Navigating to Cart...");
    navigate(`/cart`);
  };

  return (
    <>
      <div className="w-full">
        <div className="nav bg-slate-700 h-24 flex items-center justify-center">
          <ul className="flex text-white text-xl space-x-36">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="relative cursor-pointer" onClick={handleCart}>
              {/* Display cart count (safe handling) */}
              <span className="absolute -top-2 -right-2 px-2 text-slate-700 bg-white rounded-full text-lg">
                {props.data?.length || 0}
              </span>
              <img src={cart} alt="cart" className="w-10 h-10" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
