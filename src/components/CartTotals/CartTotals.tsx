import React, { FC } from "react";
import {
  GrandPrice,
  ShippingWrapper,
  TotalsButton,
  TotalsContainer,
  TotalsPrice,
  TotalsWrapper,
} from "./style";

const CartTotals: FC = () => {
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
          <p>$23.80</p>
        </TotalsPrice>
        <TotalsPrice>
          <p>Grand Total</p>
          <GrandPrice>$47.60</GrandPrice>
        </TotalsPrice>
        <TotalsButton>Proceed To Checkout</TotalsButton>
      </TotalsWrapper>
    </TotalsContainer>
  );
};

export default CartTotals;
