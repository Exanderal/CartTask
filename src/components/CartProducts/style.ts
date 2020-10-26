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

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.black};
  cursor: pointer;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  font-weight: 700;
  transition: all 0.2s;
  margin-left: auto;
  :hover {
    background-color: ${(props) => props.theme.color.primary};
  }
`;
export const WarningWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const WarningButton = styled(Button)`
  margin: 0.5rem 0 0;
`;
