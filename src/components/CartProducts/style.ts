import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  margin-right: 2rem;
  padding: 2rem 3rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 0;
    padding: 1rem 0;
  }
`;
