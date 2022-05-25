import styled from "styled-components";

export const ButtonModal = styled.button`
  width: fit-content;
  padding: 3px 10px;
  height: 25px;
  background-color: ${(prop) =>
    prop.bgColor ? prop.bgColor : "var(--grey-3)"};
  border: none;
  border-radius: 4px;
  color: var(--grey-0);
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
`;
