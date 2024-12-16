import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContext, CartContextProvider } from "./store/CartContext";
import MealsContextProvider from "./store/MealsContext";

function App() {
  return (
    <CartContextProvider>
      <MealsContextProvider>
        <Header />
        <Meals />
      </MealsContextProvider>
    </CartContextProvider>
  );
}

export default App;
