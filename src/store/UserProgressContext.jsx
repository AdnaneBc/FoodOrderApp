import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "", // cart , checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  // managing state
  const [userProgress, setUserProgress] = useState("");
  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };
  const showCheckout = () => {
    setUserProgress("checkout");
  };
  const hideCheckout = () => {
    setUserProgress("");
  };
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
