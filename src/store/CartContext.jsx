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
      return { ...state, items: updatedItems };
    case "REMOVE_ITEM":
      const itemIndex = state.items.findIndex((item) => item.id === action.id);
      const existingItem = state.items[itemIndex];
      const updatedAfterRemoveItems = [...state.items];
      if (existingItem.quantity === 1) {
        updatedAfterRemoveItems.splice(itemIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedAfterRemoveItems[itemIndex] = updatedItem;
      }
      return { ...state, items: updatedAfterRemoveItems };

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

  const cartContext = {
    items: state.items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
