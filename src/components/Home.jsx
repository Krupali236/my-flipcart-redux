const Home = (props) => {
  const handleCategory = (category) => {
    props.filterByCategoryHandler(category); //  Dispatch Redux action
  };
  return (
    <>
      <div className="container:full">
        <div>
          <div className="grid my-5">
            <div className="columns-1 flex justify-center lg:flex-row sm:flex-col">
              <button
                className="bg-slate-400 mx-10"
                onClick={() => handleCategory("all")}
              >
                All
              </button>
              <button
                className="bg-slate-400 mx-10"
                onClick={() => handleCategory("Electronics")}
              >
                Electronics
              </button>
              <button
                className="bg-slate-400 mx-10"
                onClick={() => handleCategory("Accessories")}
              >
                Accessories
              </button>
              <button
                className="bg-slate-400 mx-10"
                onClick={() => handleCategory("Fashion")}
              >
                Fashion
              </button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 px-4 my-4">
          {props.filteredProducts.map((items, index) => {
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
                      onClick={() => props.AddtoCartHandler(items)}
                    >
                      Add To Cart
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
