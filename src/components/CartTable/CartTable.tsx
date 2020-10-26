import React, { FC } from "react";
import { StyledTable } from "./style";
import Headphones from "../../images/headphones.png";
import CartProduct from "../CartProduct";

const CartTable: FC = () => {
  return (
    <StyledTable>
      <tr>
        <th></th>
        <th></th>
        <th>Product Name</th>
        <th>Unit Price</th>
        <th>Qty</th>
      </tr>
      <CartProduct image={Headphones} price={11.99} title="Headphones" />
    </StyledTable>
  );
};

export default CartTable;
