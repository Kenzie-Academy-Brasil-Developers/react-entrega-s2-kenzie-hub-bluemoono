import styled, { css } from "styled-components";

export const Container = styled.div`
  html,
  body {
    overflow: hidden;
  }

  p {
    color: var(--grey-0);
    margin: 10px 0;
  }

  span {
    color: var(--negative);
  }
`;

export const InputComponent = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  background-color: var(--grey-2);
  color: var(--grey-0);
  border: none;
  border-radius: 4px;
  width: 400px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #e83f5b;
    `}

  @media (max-width: 400px) {
    width: 100%;
  }
`;
