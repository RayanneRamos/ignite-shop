import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  checkIfItemAlreadyExists: (productId: string) => boolean;
  removeCartItem: (productId: string) => void;
  cartTotal: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [ cartItems, setCartItems ] = useState<IProduct[]>([]);
  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((product) => product.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, checkIfItemAlreadyExists, removeCartItem, cartTotal }}>
      { children }
    </CartContext.Provider>
  );
}