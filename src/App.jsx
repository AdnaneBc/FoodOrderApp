import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import { CartContext, CartContextProvider } from "./store/CartContext";
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
        </MealsContextProvider>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
