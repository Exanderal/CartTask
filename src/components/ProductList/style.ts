import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  padding-bottom: 1rem;
  border-collapse: collapse;
  margin-bottom: 1rem;
  tr th {
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.color.borderGrey};
    font-weight: 700;
    padding-bottom: 1rem;
  }
`;
