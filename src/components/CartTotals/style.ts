import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShippingWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.color.grey};
  border: 1px solid ${(props) => props.theme.color.borderGrey};
  padding: 0.8rem 1rem;
  align-items: center;
  justify-content: space-between;
  :first-child {
    margin-bottom: 1rem;
  }
  p {
    font-weight: 700;
  }
`;
export const TotalsWrapper = styled.div`
  background: ${(props) => props.theme.color.lightGrey};
  padding: 1rem 1.6rem;
  border: 1px solid ${(props) => props.theme.color.borderGrey};
  border-top: none;
`;
export const TotalsContainer = styled.div`
  width: 20%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const TotalsPrice = styled.div`
  display: flex;
  padding: 1rem 0.4rem;
  align-items: center;
  :first-child {
    border-bottom: 1px solid ${(props) => props.theme.color.borderGrey};
  }
  p:nth-child(2) {
    font-weight: 700;
    margin-left: auto;
  }
`;
export const TotalsButton = styled.button`
  background-color: ${(props) => props.theme.color.black};
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
  padding: 0.6rem 1rem;
  margin-left: auto;
  border: none;
  font-weight: 700;
  width: 100%;
  transition: all 0.2s;
  :hover {
    background-color: ${(props) => props.theme.color.primary};
  }
`;
export const GrandPrice = styled.p`
  font-size: 1.2rem;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
`;
