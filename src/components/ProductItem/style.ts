import styled from "styled-components";

export const TableImage = styled.img`
  @media only screen and (max-width: 900px) {
    width: 5rem;
  }
  @media only screen and (max-width: 400px) {
    width: 2.5rem;
  }
`;
export const ProductPrice = styled.p`
  font-weight: 700;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const QuantityButton = styled.button`
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.color.grey};
  padding: 0.2rem 0.6rem;
  border: 1px solid ${(props) => props.theme.color.borderGrey};
  cursor: pointer;
  transition: all 0.2s;
  @media only screen and (max-width: 340px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
  }
  :hover {
    background-color: ${(props) => props.theme.color.borderGrey};
  }
`;

export const Quantity = styled.div`
  padding: 0.25rem 0.6rem;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 1);
  @media only screen and (max-width: 340px) {
    padding: 0.1rem 0.4rem;
  }
`;
export const StyledTr = styled.tr`
  td {
    border-bottom: 1px solid ${(props) => props.theme.color.borderGrey};
    padding: 1rem 0;
    :first-child {
      cursor: pointer;
    }
  }
`;

export const DeleteIcon = styled.img`
cursor: pointer;
`
export const EditIcon = styled.img`
cursor: pointer;
`