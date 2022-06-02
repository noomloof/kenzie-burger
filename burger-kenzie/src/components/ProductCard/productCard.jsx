import "./styles.css";

export function ProductCard({
  id,
  img,
  name,
  category,
  quantity,
  handleItemRemoval,
  index,
}) {
  function grabId() {
    handleItemRemoval(index);
  }

  return (
    <li key={index} index={index} className="cartItem">
      <div className="cartImageContainer">
        <img src={img} alt="product" />
      </div>
      <div className="cartItemInfo">
        <div className="cartItemName"> {name} </div>
        <div className="cartItemCategory"> {category} </div>
        <div className="cartItemQuantity"> {quantity}&times; </div>
      </div>
      <div className="cartRemove" onClick={grabId}>
        Remover
      </div>
    </li>
  );
}
