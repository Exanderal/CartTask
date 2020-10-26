import styled from "styled-components";

export const CartContainer = styled.main`
  display: flex;
  min-height: 100vh;
  flex: 1;
  padding: 0 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1300px) {
    padding: 0 6rem;
  }
  @media only screen and (max-width: 1050px) {
    padding: 0 2rem;
  }
  @media only screen and (max-width: 900px) {
    min-height: auto;
    margin: 0.7rem 0;
  }
  @media only screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
  }
  @media only screen and (max-width: 340px) {
    padding: 0 0.2rem;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 700px) {
    padding: 0.5rem 1rem;
  }
  @media only screen and (max-width: 340px) {
    padding: 0 0.2rem;
  }
`;
