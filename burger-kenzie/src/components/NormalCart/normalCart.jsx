import "./styles.css";
import { ProductCard } from "../ProductCard/productCard";

export function NormalCart({ currentSale, handleItemRemoval }) {
  return (
    <div className="cartModel">
      <div className="cartTitle">
        <h4 className="cartTitleText">Carrinho de compras</h4>
      </div>
      <div className="productArea">
        <ul className="cartList">
          {currentSale.map((element, index) => (
            <ProductCard
              index={index}
              id={element.id}
              img={element.img}
              name={element.name}
              category={element.category}
              handleItemRemoval={handleItemRemoval}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
