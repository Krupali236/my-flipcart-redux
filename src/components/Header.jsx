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

// import { useNavigate } from "react-router-dom";
// import cart from "../assets/cart.svg";

// const Header = (props) => {
// const navigate = useNavigate();
//   // console.log(props.data, "Home props");
//   const  handleCart = ()=>{
//     console.log("Navigation")
//     navigate(`/cart`);
//   }
//   return (
//     <>
//       <div className="container:full">
//         <div className="nav bg-slate-700 h-24 w-full flex items-center justify-center">
//           <ul className="flex text-white justify-evenly text-xl">
//             <li className="mx-36">Home</li>
//             <li className="mx-36">About</li>
//             <li className="mx-36">Contact</li>
//             <li className="cursor-pointer" onClick={()=>props.FilterCartHandler()}>
//               <span className="absolute top-3 ms-6 px-2 text-slate-700 bg-white rounded-full text-lg">
//                 {props.data.length}
//               </span>
//               <img src={cart} alt="cart" height="40px" width="40px" />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Header;
