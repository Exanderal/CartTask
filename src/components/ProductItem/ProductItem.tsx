import React, { FC, useContext } from "react";
import Ximg from "../../images/x-img.png";
import EditImg from "../../images/edit-img.png";
import {
  TableImage,
  ProductPrice,
  QuantityWrapper,
  QuantityButton,
  Quantity,
  StyledTr,
  EditIcon,
  DeleteIcon
} from "./style";
import { CartContext } from "../../context/CartContext";

type Props = {
  image: string;
  title: string;
  price: number;
};

const CartProduct: FC<Props> = ({ image, price, title }) => {
  const { setQuantity, setProductQuantity, productQuantity } = useContext(
    CartContext
  );
  const incrementQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };
  const decrementQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  const removeProduct = () => {
    setQuantity(0);
    setProductQuantity(0);
  };
  const updateCart = () => {
    setQuantity(productQuantity);
  };
  return (
    <tbody>
      <StyledTr>
        <td onClick={removeProduct}>
          <DeleteIcon src={Ximg} alt="delete icon" />
        </td>
        <td>
          <TableImage src={image} alt="Product image" />
        </td>
        <td>{title}</td>
        <td>
          <ProductPrice>${price}</ProductPrice>
        </td>
        <td>
          <QuantityWrapper>
            <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
            <Quantity>{productQuantity}</Quantity>
            <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
            <EditIcon src={EditImg} onClick={updateCart} alt="Edit icon" />
          </QuantityWrapper>
        </td>
      </StyledTr>
    </tbody>
  );
};

export default CartProduct;
