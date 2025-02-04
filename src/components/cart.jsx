const Cart = (props) => {
  console.log("Cart props (Updated After Fix):", props); // Debugging log
  const cartItems = Array.isArray(props.data) ? props.data : [];
  return (
    <>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center my-4">Shopping Cart</h2>
        <div className="grid grid-cols-3 gap-5 px-4 my-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="columns-1" key={index}>
                <div className="card bg-slate-300 flex flex-col justify-center items-center h-full p-4">
                  <img
                    className="my-3 w-32 h-32 object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <p className="text-lg font-bold my-3">{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <button
                    className="my-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                    onClick={() => props.RemovetoCartHandler(item)}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl font-bold col-span-3">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
