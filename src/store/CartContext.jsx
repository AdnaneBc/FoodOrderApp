import { createContext, useReducer } from "react";

const initialState = {
  items: [],
};
export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("object")
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          ...action.item,
          quantity: 1,
        });
      }
      return { items: updatedItems };
    case "REMOVE_ITEM":
      const itemIndex = state.items.findIndex((item) => item.id === action.id);
      if (itemIndex > -1) {
        const existingItem = state.items[itemIndex];
        let updatedItems = [...state.items];
        if (existingItem.quantity === 1) {
          updatedItems = updatedItems.filter((item) => item.id !== action.id);
        } else {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
          updatedItems[itemIndex] = updatedItem;
        }
        return { items: updatedItems };
      }
    default:
      return state;
  }
}
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
