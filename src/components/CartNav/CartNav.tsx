import React, { FC } from "react";
import Button from "../Button";
import { NavContainer } from "./style";

const CartNav: FC = () => {
  return (
    <NavContainer>
      <h1>Shopping cart</h1>
      <Button content="Proceed To Checkout" />
    </NavContainer>
  );
};

export default CartNav;
