import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import Checkout from "./components/UI/Checkout";
import { CartContextProvider } from "./store/CartContext";
import MealsContextProvider from "./store/MealsContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <MealsContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </MealsContextProvider>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
