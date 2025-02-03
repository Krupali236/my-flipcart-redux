import cart from "../assets/cart.svg";
const Home = () => {
  return (
    <>
      {/* <h1>Home Component</h1> */}
      <div className="container:full">
        <div className="nav bg-slate-700 h-24">
          <ul className="flex  text-white justify-evenly py-5 text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <img src={cart} alt="cart" height="30px" width="30px" />
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-3 px-4 my-4">
          <div className="col">
            <div className="card bg-red-300 flex flex-col justify-center items-center">
              <img className="my-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe44qS3XsYY3DsNTObV_QjxYGRvI18DGfEcg&s"
                alt="oneplus mobile"
              />
              <p>Price : $1000.00    </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
