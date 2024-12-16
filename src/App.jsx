import Header from "./components/Header";
import Meals from "./components/Meals";
import MealsContextProvider from "./store/MealsContext";

function App() {
  return (
    <MealsContextProvider>
      <Header />
      <Meals />
    </MealsContextProvider>
  );
}

export default App;
