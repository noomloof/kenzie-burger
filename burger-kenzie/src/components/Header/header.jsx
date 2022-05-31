import "./styles.css";

export function Header({
  products,
  logo,
  setFilter,
  setFilteredProducts,
  input,
  setInput,
}) {
  function filterProducts() {
    setFilter(input);

    setFilteredProducts(
      products.filter((element) => {
        return (
          element.name.toLowerCase().includes(input.toLowerCase()) ||
          element.category.toLowerCase().includes(input.toLowerCase())
        );
      })
    );
  }

  return (
    <header>
      <div className="logoContainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="headerInput">
        <div className="width100">
          <input
            className="inputItself"
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
        </div>
        <div className="width100">
          <button className="inputButton" onClick={filterProducts}>
            Pesquisar
          </button>
        </div>
      </div>
    </header>
  );
}
