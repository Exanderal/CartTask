import { createContext } from "react";
interface ICartContext {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext({} as ICartContext);
