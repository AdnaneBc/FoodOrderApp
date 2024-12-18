import { currencyFormatter } from "../../util/formatting";
import { CartContext } from "../../store/CartContext";
import { use } from "react";

const CartItem = ({ item }) => {
  const { name, quantity, price } = item;
  const { addItem, removeItem } = use(CartContext);
  function removeItemHandler() {
    removeItem(item.id);
  }
  function addItemHandler() {
    addItem(item);
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
