import "./styles.css";
import { NormalCart } from "../NormalCart/normalCart";
import { EmptyCart } from "../EmptyCart/emptyCart";
import { CartTotal } from "../CartTotal/cartTotal";
import { useEffect, useState } from "react";

export function Cart({
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  updateTotal,
}) {
  const [saleCheck, setSaleCheck] = useState(false);

  useEffect(() => {
    currentSale.length > 0 ? setSaleCheck(true) : setSaleCheck(false);
  }, [currentSale]);

  function handleItemRemoval(productId) {
    const beforeTarget = currentSale.slice(0, productId);
    const afterTarget = currentSale.slice(productId + 1, currentSale.length);
    setCurrentSale([...beforeTarget, ...afterTarget]);
  }

  return (
    <div className="cartContainer">
      {saleCheck && (
        <NormalCart
          currentSale={currentSale}
          handleItemRemoval={handleItemRemoval}
        />
      )}
      {saleCheck && (
        <CartTotal
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      )}
      {!saleCheck && <EmptyCart />}
    </div>
  );
}
