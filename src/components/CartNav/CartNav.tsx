import React, { FC, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavContainer, Button, StyledLink } from "./style";

const CartNav: FC = () => {
  const { quantity } = useContext(CartContext);
  return (
    <NavContainer>
      <h1>Shopping cart</h1>

      {quantity > 0 ? (
        <StyledLink to="/checkout">
          <Button>Proceed to checkout</Button>
        </StyledLink>
      ) : (
        ""
      )}
    </NavContainer>
  );
};

export default CartNav;
