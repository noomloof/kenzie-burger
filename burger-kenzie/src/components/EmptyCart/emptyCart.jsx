import "./styles.css";

export function EmptyCart() {
  return (
    <div className="cartModel">
      <div className="cartTitle">
        <h4 className="cartTitleText">Carrinho de compras</h4>
      </div>
      <div className="productArea emptyProperty ">
        <h4 className="emptyTitle">Sua sacola está vazia</h4>
        <span className="emptyAditional">Adicione itens</span>
      </div>
    </div>
  );
}
