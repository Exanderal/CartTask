import React, { FC } from "react";
import CartNav from "../../components/CartNav";
import CartProducts from "../../components/CartProducts";
import CartTotals from "../../components/CartTotals";
import { CartContainer, CartWrapper } from "./style";

const Cart: FC = () => {
  return (
    <CartContainer>
      <CartNav />
      <CartWrapper>
        <CartProducts />
        <CartTotals />
      </CartWrapper>
    </CartContainer>
  );
};

export default Cart;
