import cart from "../assets/cart.svg";
const Header = (props) => {
  console.log(props.data, "Home props");
  return (
    <>
      <div className="container:full">
        <div className="nav bg-slate-700 h-24">
          <ul className="flex  text-white justify-evenly py-5 text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <span className="absolute top-1 ms-5 px-2 text-slate-700 bg-white rounded-full text-lg">
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
