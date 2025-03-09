import { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    console.log("Home Props:", props); // Debugging log
  }, [props.cart]); // Logs cart updates

  const handleCategory = (category) => {
    if (category === "All") {
      props.resetProductsHandler();
    } else {
      props.filterByCategoryHandler(category);
    }
  };

  const handleAddToCart = (item) => {
    console.log("Adding to Cart:", item); // Debugging log

    const existingItem = props.cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      props.updateCartQuantityHandler(item.id, existingItem.quantity + 1);
    } else {
      props.AddtoCartHandler({ ...item, quantity: 1 });
    }
  };

  return (
    <div className="w-full px-4">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-5">
        {["All", "Electronics", "Accessories", "Fashion"].map((category) => (
          <button
            key={category}
            className="bg-slate-400 text-white px-4 py-2 rounded-lg hover:bg-slate-500 transition-all"
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 sm:px-4 lg:px-6 my-4">
        {props.filteredProducts.map((item, index) => (
          <div
            key={index}
            className="bg-slate-300 p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              className="w-32 h-32 object-cover my-3"
              src={item.image}
              alt={item.name}
            />
            <p className="text-lg font-bold my-3 text-center">{item.name}</p>
            <p className="text-center">Price: ${item.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg my-3 hover:bg-blue-600 transition-all"
              onClick={() => handleAddToCart(item)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
