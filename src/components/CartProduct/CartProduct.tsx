import React, { FC } from "react";
import Ximg from "../../images/x-img.png";
import EditImg from "../../images/edit-img.png";
import {
  TableImage,
  ProductPrice,
  QuantityWrapper,
  QuantityButton,
  Quantity,
  StyledTr,
} from "./style";

type Props = {
  image: string;
  title: string;
  price: number;
};

const CartProduct: FC<Props> = ({ image, price, title }) => {
  return (
    <StyledTr>
      <td>
        <img src={Ximg} />
      </td>
      <td>
        <TableImage src={image} />
      </td>
      <td>{title}</td>
      <td>
        <ProductPrice>${price}</ProductPrice>
      </td>
      <td>
        <QuantityWrapper>
          <QuantityButton>-</QuantityButton>
          <Quantity>2</Quantity>
          <QuantityButton>+</QuantityButton>
          <img src={EditImg} />
        </QuantityWrapper>
      </td>
    </StyledTr>
  );
};

export default CartProduct;
