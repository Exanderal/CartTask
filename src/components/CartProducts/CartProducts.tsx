import React, { FC } from "react";
import Button from "../Button";
import CartTable from "../CartTable";
import { ProductsWrapper } from "./style";

const CartProducts: FC = () => {
  return (
    <ProductsWrapper>
      <CartTable />
      <Button content="Update Shopping Cart" />
    </ProductsWrapper>
  );
};

export default CartProducts;
