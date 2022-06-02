import "./styles.css";

export function CartTotal({ currentSale, setCurrentSale }) {
  function getTotalValue() {
    return currentSale.reduce(
      (accumulator, element) => accumulator + element.price * element.quantity,
      0
    );
  }

  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <div className="cartTotalDisplay">
      <div className="divisor"></div>
      <div className="totalDisplay">
        <div className="totalText">Total</div>
        <div className="totalValue">
          {getTotalValue().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
      <div className="removeAll" onClick={removeAll}>
        Remover Todos
      </div>
    </div>
  );
}
