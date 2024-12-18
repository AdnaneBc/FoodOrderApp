import { currencyFormatter } from "../../util/formatting";
import { CartContext } from "../../store/CartContext";
import { use } from "react";

const CartItem = ({ item,onAddItem,onRemoveItem }) => {
  const { name, quantity, price } = item;
  function removeItemHandler() {
    onRemoveItem(item.id);
  }
  function addItemHandler() {
    onAddItem(item);
  }
  return (
    <li className="cart-item">
      <p>
        {name} - {currencyFormatter.format(quantity * price)}
      </p>
      <p>
        <button onClick={removeItemHandler}>-</button>
        <span>{quantity}</span>
        <button onClick={addItemHandler}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
