import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px 25px;

  @media only screen and (min-width: 790px) {
    justify-content: space-between;
  }
`;
