import styled from "styled-components";

export const Component = styled.button`
  background-color: ${(props) => props.theme.color.black};
  cursor: pointer;
  color: white;
  padding: 0.6rem 1rem;
  margin-left: auto;
  border: none;
  font-weight: 700;
`;
