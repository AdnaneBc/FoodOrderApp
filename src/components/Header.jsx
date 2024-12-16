import { use } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
const Header = () => {
  const { items } = use(CartContext);
  const numberOfItems = items.length;
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>My React App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({numberOfItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
