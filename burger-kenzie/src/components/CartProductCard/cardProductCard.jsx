import "./styles.css";

export function CardProductCard({
  id,
  img,
  name,
  category,
  price,
  handleUpdateCart,
  setFilter,
  setInput,
  index,
}) {
  function captureId(event) {
    handleUpdateCart(id);
    setFilter("");
    setInput("");
  }

  let positionFixer = "";

  if (id === 4 || id === 5) {
    positionFixer = "adjustment";
  } else if (id === 6) {
    positionFixer = "minorAdjust";
  }

  return (
    <li key={index} index={id} className="productCard">
      <div className="productImageContainer">
        <img src={img} alt="productImage" className={positionFixer} />
      </div>
      <div className="productGeneralInfo">
        <div className="productName"> {name} </div>
        <div className="productCategory"> {category} </div>
        <div className="productPrice">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <div className="productBuy" onClick={captureId}>
          Adicionar
        </div>
      </div>
    </li>
  );
}
