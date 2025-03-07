const Cart = (props) => {
  console.log("Cart props (Updated After Fix):", props); // Debugging log
  const cartItems = Array.isArray(props.data) ? props.data : [];

  return (
    <>
      <div className="w-full px-4">
        <h2 className="text-2xl font-bold text-center my-4">Shopping Cart</h2>

        {/* Responsive Grid for Cart Items */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 sm:px-4 lg:px-6 my-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-slate-300 p-4 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  className="w-32 h-32 object-cover my-3"
                  src={item.image}
                  alt={item.name}
                />
                <p className="text-lg font-bold my-3 text-center">
                  {item.name}
                </p>
                <p className="text-center">Price: ${item.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg my-3 hover:bg-red-700 transition-all"
                  onClick={() => props.RemovetoCartHandler(item)}
                >
                  Remove From Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-xl font-bold col-span-full py-10">
              🛒 Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
