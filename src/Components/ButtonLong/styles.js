import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(prop) =>
    prop.bgColor ? prop.bgColor : "var(--grey-3)"};
  border: none;
  border-radius: 4px;
  color: var(--grey-0);
  margin-top: 10px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
