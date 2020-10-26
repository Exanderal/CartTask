import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.color.black};
  cursor: pointer;
  color: white;
  padding: 0.6rem 1rem;
  margin-left: auto;
  border: none;
  font-weight: 700;
  transition: all 0.2s;
  :hover {
    background-color: ${(props) => props.theme.color.primary};
  }
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
`;
