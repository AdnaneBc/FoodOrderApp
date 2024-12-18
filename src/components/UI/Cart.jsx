import Modal from "./Modal";
import { CartContext } from "../../store/CartContext";
import { use } from "react";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import { UserProgressContext } from "../../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, addItem, removeItem } = use(CartContext);
  const { progress, hideCart, showCheckout } = use(UserProgressContext);
  const cartTotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const onCloseHandler = () => {
    hideCart();
  };
  function handleShowCheckout() {
    showCheckout();
  }
  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAddItem={addItem}
            onRemoveItem={removeItem}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={onCloseHandler}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleShowCheckout}>Go to Checkout</Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
