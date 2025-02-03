import cart from "../assets/cart.svg";
const Home = (props) => {
    console.log(props, "Home props");

  console.log(props.data, "Home props");  
  return (
    <>
      <div className="container:full">
        {/* <div className="nav bg-slate-700 h-24">
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
        </div> */}
        <div className="grid grid-cols-3 gap-3 px-4 my-4">
          <div className="col">
            <div className="card bg-red-300 flex flex-col justify-center items-center">
              <img
                className="my-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe44qS3XsYY3DsNTObV_QjxYGRvI18DGfEcg&s"
                alt="oneplus mobile"
              />
              <p>Price : $1000.00 </p>
              <button className="my-3"
                onClick={() =>
                  props.AddtoCartHandler({ price: 1000, name: "oneplus phone" })
                }
              >
                Add To Cart
              </button>
              <button className="my-3"    
              onClick={() =>
                  props.RemovetoCartHandler()}>Remove To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
