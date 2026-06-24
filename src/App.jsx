import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const checkout = () => {
  if (cart.length === 0) return;

  alert("Order placed successfully 🎉");

  setCart([]);
  setOrderPlaced(true);

  setTimeout(() => {
    setOrderPlaced(false);
  }, 3000);
};

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Amazon Clone</h2>

        <input
          type="text"
          placeholder="Search Amazon Clone"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart">
          🛒 Cart ({cart.length})
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Welcome to Amazon Clone</h1>
        <p>Discover Amazing Products at Great Prices</p>
      </section>

      {/* Products */}
      <section className="products">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p className="price">
              ₹{product.price}
            </p>

            <button
              onClick={() =>
                addToCart(product)
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart Section */}
     <section className="cart-section">
  <h2>Shopping Cart</h2>

  {orderPlaced && (
    <p className="success-msg">
      🎉 Your order has been placed successfully!
    </p>
  )}

  {cart.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <>
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>
            {item.name} - ₹{item.price}
          </span>

          <button onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <button className="checkout-btn" onClick={checkout}>
        Proceed to Checkout
      </button>
    </>
  )}
</section>

      <footer>
        <p>
          © 2026 Amazon Clone Project
        </p>
      </footer>
    </>
  );
}

export default App;