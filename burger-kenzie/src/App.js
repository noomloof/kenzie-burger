import "./App.css";
import logo from "./components/images/logo.svg";
import { Header } from "./components/Header/header";
import { ProductList } from "./components/ProductList/productList";
import { Cart } from "./components/Cart/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts([...response]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header
        logo={logo}
        products={products}
        filter={filter}
        setFilter={setFilter}
        setFilteredProducts={setFilteredProducts}
        input={input}
        setInput={setInput}
      />
      <div className="generalContainer">
        <ProductList
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          filteredProducts={filteredProducts}
          filter={filter}
          setFilter={setFilter}
          setInput={setInput}
        />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;
