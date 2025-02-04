import { products } from "./Products";

const Home = (props) => {
  // console.log(props, "Home props");
  // console.log(props.data, "Home props");
  const handleCategory = ()=>{

  }
  return (
    <>
      <div className="container:full">
        <div>
          <div className="grid my-5">
            <div className="columns-1 flex justify-center">
            <button className="bg-slate-400 mx-10" onClick={handleCategory}>All</button>
              <button className="bg-slate-400 mx-10" onClick={handleCategory}>Electronics</button>
              <button className="bg-slate-400 mx-10" onClick={handleCategory}>Accessories</button>
              <button className="bg-slate-400 mx-10" onClick={handleCategory}>Fashion</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 px-4 my-4">
          {products.map((items, index) => {
            return (
              <>
                <div className="columns-1" key={index}>
                  <div className="card bg-slate-300 flex flex-col justify-center items-center h-full">
                    <img
                      className="my-3"
                      src={items.image}
                      alt="oneplus mobile"
                    />
                    <p className="text-lg font-bold my-3">{items.name}</p>
                    <p>Price : ${items.price}</p>
                    <button
                      className="my-3"
                      onClick={() =>
                        props.AddtoCartHandler(index)
                      }
                    >
                      Add To Cart
                    </button>
                    <button
                      className="my-3"
                      onClick={() => 
                        props.RemovetoCartHandler()}
                    >
                      Remove To Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
