import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const increaseQuantity = (cartItems, productToIncrease) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
const decreaseQuantity = (cartItems, productToDecrease) => {
  return cartItems.flatMap((cartItem) => {
    if (cartItem.id === productToDecrease.id) {
      if (cartItem.quantity === 1) {
        return [];
      } else {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
    } else {
      return cartItem;
    }
  });
};

export const ShoppingCartContext = createContext({
  currentState: false,
  setCurrentState: () => false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const toggleFunction = () => {
    setCurrentState(!currentState);
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const increaseItemQuantity = (productToIncrease) => {
    setCartItems(increaseQuantity(cartItems, productToIncrease));
  };

  const decreaseItemQuantity = (productToDecrease) => {
    setCartItems(decreaseQuantity(cartItems, productToDecrease));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        currentState,
        toggleFunction,
        addItemToCart,
        cartItems,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
