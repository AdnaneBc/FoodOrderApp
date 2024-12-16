// create a meal context
import React, { useState, useEffect, createContext } from "react";

export const MealsContext = createContext();

const MealsContextProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const data = await response.json();
        setMeals(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <MealsContext.Provider value={{ meals, loading }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;
