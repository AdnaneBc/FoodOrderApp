import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  const { name, description, price, image } = meal;
  const url = `http://localhost:3000/${image}`;

  function addToCartHandler() {
    const mealItem = {
      id: meal.id,
      name: meal.name,
      price: meal.price,
    };
  }
  return (
    <li className="meal-item">
      <article>
        <img src={url} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <div className="meal-item-actions">
          <Button textOnly={false}>Add to cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
