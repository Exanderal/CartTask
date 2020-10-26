import React, { FC, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductList from "../ProductList";
import {
  ProductsWrapper,
  Button,
  WarningWrapper,
  WarningButton,
} from "./style";

const CartProducts: FC = () => {
  const { productQuantity, setQuantity } = useContext(CartContext);
  const updateCart = () => {
    setQuantity(productQuantity);
  };
  return (
    <ProductsWrapper>
      {productQuantity > 0 ? (
        <>
          <ProductList />
          <Button onClick={updateCart}>Update Shopping Cart</Button>
        </>
      ) : (
        <WarningWrapper>
          <h1 style={{ textAlign: "center" }}>
            You have no items in your cart.
          </h1>
          <WarningButton
            onClick={() => {
              window.location.reload();
            }}
          >
            Go Back
          </WarningButton>
        </WarningWrapper>
      )}
    </ProductsWrapper>
  );
};

export default CartProducts;
