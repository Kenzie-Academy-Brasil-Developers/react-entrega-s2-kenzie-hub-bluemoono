import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  padding: 3px 10px;
  height: 25px;
  background-color: ${(prop) =>
    prop.bgColor ? prop.bgColor : "var(--grey-3)"};
  border: none;
  border-radius: 4px;
  color: var(--grey-0);
`;
