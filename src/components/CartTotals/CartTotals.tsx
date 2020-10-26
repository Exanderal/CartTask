import React, { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  GrandPrice,
  ShippingWrapper,
  TotalsButton,
  TotalsContainer,
  TotalsPrice,
  TotalsWrapper,
  StyledLink,
} from "./style";

const CartTotals: FC = () => {
  const { quantity } = useContext(CartContext);
  const [grandPrice, setGrandPrice] = useState(0);
  const changeNumber = (numToChange: number) => Number(numToChange.toFixed(2));
  useEffect(() => {
    if (quantity === 0) setGrandPrice(0);
    else if (quantity * 11.99 > 100) {
      setGrandPrice(changeNumber(quantity * 11.99));
    } else {
      setGrandPrice(changeNumber(quantity * 11.99 + 23.8));
    }
  }, [quantity]);

  return (
    <TotalsContainer>
      <ShippingWrapper>
        <p>SHIPPING</p>
        <p>$23.80</p>
      </ShippingWrapper>
      <ShippingWrapper>
        <p>CART TOTALS</p>
      </ShippingWrapper>
      <TotalsWrapper>
        <TotalsPrice>
          <p>Subtotal</p>
          <p>${changeNumber(11.99 * quantity)}</p>
        </TotalsPrice>
        <TotalsPrice>
          <p>Grand Total</p>
          <GrandPrice>${grandPrice}</GrandPrice>
        </TotalsPrice>
        {quantity > 0 ? (
          <StyledLink to="/checkout">
            <TotalsButton>Proceed To Checkout</TotalsButton>
          </StyledLink>
        ) : (
          ""
        )}
      </TotalsWrapper>
    </TotalsContainer>
  );
};

export default CartTotals;
