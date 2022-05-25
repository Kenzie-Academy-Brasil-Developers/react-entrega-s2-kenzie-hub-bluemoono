import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 15px auto;
  height: 100vh;

  @media (max-width: 400px) {
    justify-content: space-around;
    margin: 50px -50px;
  }
`;

export const Logo = styled.h3`
  color: var(--primary);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  background-color: var(--grey-3);

  h2,
  p {
    padding: 5px 0;
  }

  select,
  option {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: var(--grey-2);
    border: none;
    border-radius: 4px;
    width: 400px;
    color: var(--grey-1);
    font-size: 16px;
  }

  .white {
    color: var(--grey-0);
  }

  .error {
    color: var(--negative);
  }

  @media (max-width: 400px) {
    margin: 30px 70px;

    h2 {
      font-size: 16px;
    }

    select {
      width: 300px;
    }
  }
`;
