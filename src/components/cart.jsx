import { products } from "./Products";

const Cart = (props) => {
  console.log(props,"propss cart")
  return (
    <>
      <div className="container:full">
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
                        props.AddtoCartHandler({
                          price: 1000,
                          name: "oneplus phone",
                        })
                      }
                    >
                      Add To Cart
                    </button>
                    <button
                      className="my-3"
                      onClick={() => props.RemovetoCartHandler()}
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
export default Cart;
