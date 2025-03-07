import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import cart from "../assets/cart.svg";

const Header = (props) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to navigate to cart page
  const handleCart = () => {
    console.log("Navigating to Cart...");
    navigate(`/cart`);
  };

  return (
    <>
      <div className="w-full">
        <div className="nav h-16 bg-slate-700 flex items-center justify-between px-4">
          {/* Logo or Brand Name */}
          <div className="text-2xl">Brand</div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex flex-row text-white text-xl space-x-8">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item} className="text-white">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `cursor-pointer px-3 ${
                      isActive
                        ? "bg-white text-slate-700 font-bold"
                        : "hover:bg-white hover:text-slate-700"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <div className="relative cursor-pointer" onClick={handleCart}>
            <span className="absolute -top-2 -right-2 min-w-[1.5rem] h-[1.5rem] flex items-center justify-center text-slate-700 bg-white rounded-full text-sm font-bold">
              {props.data?.length || 0}
            </span>
            <img src={cart} alt="cart" className="w-10 h-10" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-700 text-white text-xl">
            <ul className="flex flex-col space-y-4 p-4">
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `cursor-pointer px-3 ${
                        isActive
                          ? "bg-white text-slate-700 font-bold"
                          : "hover:bg-white hover:text-slate-700"
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
