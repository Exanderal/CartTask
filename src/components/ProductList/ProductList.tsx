import React, { FC } from "react";
import { StyledTable } from "./style";
import Headphones from "../../images/headphones.png";
import ProductItem from "../ProductItem";

interface Product {
  image: string;
  price: number;
  title: string;
}

const CartTable: FC = () => {
  const defaultItems: Product[] = [
    {
      image: Headphones,
      price: 11.99,
      title: "Headphones",
    },
  ];
  return (
    <StyledTable>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Qty</th>
        </tr>
      </thead>
      {defaultItems.map((item) => {
        return (
          <ProductItem
            image={item.image}
            price={item.price}
            title={item.title}
            key={`Item-${item.title}`}
          />
        );
      })}
    </StyledTable>
  );
};

export default CartTable;
