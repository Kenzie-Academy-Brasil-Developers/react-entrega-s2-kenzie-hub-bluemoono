import styled from "styled-components";

export const ButtonModal = styled.button`
  width: 900px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: ${(prop) =>
    prop.bgColor ? prop.bgColor : "var(--grey-3)"};
  border: none;
  border-radius: 4px;
  color: var(--grey-0);
  margin: 10px;
  padding: 10px 60px;
  @media (max-width: 400px) {
    width: 300px;
  }

  &:hover {
    background-color: var(--grey-2);
  }
`;

export const HeaderModal = styled.header`
  height: 50px;
  padding: 20px;
  background-color: var(--grey-2);
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    color: var(--grey-1);
  }
`;

export const BodyModal = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

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
    align-self: flex-start;
    margin: 10px 0;
  }

  Button {
    margin: 10px 5px 10px 0;
    padding: 20px;
    flex-direction: row;
    display: inline-flex;
    align-items: center;
  }

  @media (max-width: 400px) {
    Button {
      font-size: 12px;
      margin: 5px;
    }

    select,
    option {
      width: 100%;
    }
  }
`;
