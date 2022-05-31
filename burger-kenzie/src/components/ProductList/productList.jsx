import "./styles.css";
import { CardProductCard } from "../CartProductCard/cardProductCard";

export function ProductList({
  products,
  setCurrentSale,
  currentSale,
  filteredProducts,
  filter,
  setFilter,
  setInput,
}) {
  function handleUpdateCart(productId) {
    let targetProduct = products.find((element) => element.id === productId);
    let dupeChecker = currentSale.find((element) => element.id === productId);
    if (!dupeChecker) {
      setCurrentSale([...currentSale, targetProduct]);
    }
  }

  return (
    <div className="productContainer">
      {filter ? (
        <div className="resultsFor">
          Resultados para: <span className="inputStyle">{filter}</span>{" "}
        </div>
      ) : null}

      <ul className="productList">
        {!filter ? (
          products.map((element, index) => (
            <CardProductCard
              id={element.id}
              img={element.img}
              name={element.name}
              category={element.category}
              price={element.price}
              handleUpdateCart={handleUpdateCart}
              setFilter={setFilter}
              setInput={setInput}
              index={index}
            />
          ))
        ) : filteredProducts.length === 0 ? (
          <div>There are no results for {filter}</div>
        ) : (
          filteredProducts.map((element, index) => (
            <CardProductCard
              id={element.id}
              img={element.img}
              name={element.name}
              category={element.category}
              price={element.price}
              handleUpdateCart={handleUpdateCart}
              setFilter={setFilter}
              setInput={setInput}
              index={index}
            />
          ))
        )}
      </ul>
    </div>
  );
}
