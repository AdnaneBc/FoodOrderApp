import { use } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
const Header = () => {
  const { items } = use(CartContext);
  const {showCart} = use(UserProgressContext);
  const numberOfItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  function showCartHandler() {
    showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>My React App</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCartHandler}>
          Cart ({numberOfItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
