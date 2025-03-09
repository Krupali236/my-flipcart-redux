import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();
  console.log("Cart props (Updated After Fix):", props);

  const cartItems = Array.isArray(props.data) ? props.data : [];
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
                <p className="text-center font-bold">
                  Quantity: {item.quantity}
                </p>
                <p className="text-center font-semibold text-green-600">
                  Total: ${item.price * item.quantity}
                </p>

                {/* Quantity Controls */}
                <div className="flex gap-4 my-2">
                  <button
                    className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                    onClick={() =>
                      props.updateCartQuantityHandler(
                        item.id,
                        item.quantity - 1
                      )
                    }
                    disabled={item.quantity === 1} // Prevents quantity from going below 1
                  >
                    ➖
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                    onClick={() =>
                      props.updateCartQuantityHandler(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >
                    ➕
                  </button>
                </div>

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

        {/* ✅ Display Total Price */}
        {cartItems.length > 0 && (
          <div className="text-center my-6">
            <p className="font-mono font-semibold text-xl">
              Total:{" "}
              <span className="font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
        )}

        {/* ✅ Back to Home Button (Fixed Navigation) */}
        <div className="text-center my-6">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            onClick={() => navigate("/")}
          >
            Back To Home Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
