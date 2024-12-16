import { MealsContext } from "../context/MealsContext";
import MealItem from "./MealItem";
import { use } from "react";

const Meals = () => {
  // import meals from context
  const { meals, loading } = use(MealsContext);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
